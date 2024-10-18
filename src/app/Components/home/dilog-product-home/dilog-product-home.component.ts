import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-dilog-product-home',
  templateUrl: './dilog-product-home.component.html',
  styleUrl: './dilog-product-home.component.css'
})
export class DilogProductHomeComponent {
  constructor(private services: HomeService) { }
  visible2 = false;
  dataHome: any = []
  findProduct:any
  mainImg:any
  currentIndex: number = 1
  ngOnInit() {
    this.dataHome = this.services.AllDataHome()

  }

  open(id: any) {
    let findData = this.dataHome.find((ele: any) => ele.id == id)
    this.mainImg = `assets/imges/${findData.img1} `
    this.findProduct = findData
    this.visible2 = true;
  }

  sliderImg(event:MouseEvent){
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

}
