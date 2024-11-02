import { Component, ViewChild } from '@angular/core';
import { GenralService } from '../../../Shared/services/genral.service';
import { HomeService } from '../home.service';
import { SupTotalComponent } from '../sup-total/sup-total.component';

@Component({
  selector: 'app-dilog-product-home',
  templateUrl: './dilog-product-home.component.html',
  styleUrl: './dilog-product-home.component.css'
})
export class DilogProductHomeComponent {
  @ViewChild(SupTotalComponent) supTotalComponent!: SupTotalComponent;
  constructor(private services: HomeService , private gs:GenralService) { 
    this.dataHome = this.services.AllDataHome()

this.GetResponseSuccesFromGenralServices()
 
  }
  visible2 = false;
  dataHome: any = []
  ShowSuccess:any
  findProduct: any
  mainImg: any
  currentIndex: number = 1
  cartmainarray: any[] = [];


  GetResponseSuccesFromGenralServices(){
    this.gs.$ShowSuccess.subscribe({
      next:(res:any)=>{
        this.ShowSuccess = res
      }
    })
  }

  ngAfterViewInit() {
    console.log("SupTotalComponent:",this.supTotalComponent.cartData);
  }



  open(id: any) {
    let findData = this.dataHome.find((ele: any) => ele.id == id)
    this.mainImg = `assets/imges/${findData.img1} `
    this.findProduct = findData
    this.visible2 = true;
  }

  sliderImg(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    this.mainImg = target.src

  }
  updateMainImg() {
    const imgKey = `img${this.currentIndex}`;
    this.mainImg = this.findProduct[imgKey]
      ? `assets/imges/${this.findProduct[imgKey]}`
      : 'assets/imges/default.webp';
  }


  sliderprefbutton() {
    if (this.currentIndex < 3) {
      this.currentIndex++;
      this.updateMainImg();
    }
  }

  sliderNextbutton() {
    if (this.currentIndex > 1) {
      this.currentIndex--
      this.updateMainImg();

    }
  }


  updateCartData() {
    this.supTotalComponent.cartData= JSON.parse(localStorage.getItem('cartmainProduct') || '[]');
  }



  AddProduct(id: any) {
    if (this.findProduct && typeof this.findProduct === 'object') {
      const existingCart = JSON.parse(localStorage.getItem('cartmainProduct') || '[]');
      const exists = existingCart.some((item: any) => item.id === id);
      if (!exists) {
        existingCart.push(this.findProduct);
        localStorage.setItem('cartmainProduct', JSON.stringify(existingCart));
       this. updateCartData()      
          this.gs.$ShowSuccess.next(true)
        setTimeout(() => {
          this.gs.$ShowSuccess.next(false)
        }, 3000);
      }

    }
  }














}


