import { TranslateService } from "@ngx-translate/core";
import { Component } from '@angular/core';
import { HomeService } from "../../Components/home/home.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lang: any = 'en'
  constructor(private translate: TranslateService, private services: HomeService) {
    this.lang = this.translate.currentLang
  }

  sidebarVisible: boolean = false;
  visible: boolean = false;
  position: any = { top: '10%', left: '20%' };
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  sidebarVisible3: boolean = false;
  sidebarVisible4: boolean = false;
  contentsearchone: boolean = false
  contentsearchtwo: boolean = true
  filteredProducts: any[] = [];
  ShowFilterArray: any[] = []
ShowDropDown:boolean=false
sidebarVisibleTwo: boolean = false;


  filtervalue: any = ''
  ngOnInit() {
    this.GetAllProduct()
  }


  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }


  ChangLanguage() {
    if (this.lang == 'en') {
      localStorage.setItem('languages', 'ar')
    } else {
      localStorage.setItem('languages', 'en')
    }
    window.location.reload()
  }


  showProductHover(text: any) {
    if (text == 'clothing Womens') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'clothing Womens')
        } 
      })
      console.log(this.ShowFilterArray)
    } else if(text == 'Acceroies Mopile'){
      console.log('yes')
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'Acceroies Mopile')
        } 
      })
    }else if(text == 'Beatuy'){
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'Beatuy')
        } 
      })
    }else if(text == 'Kids'){
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'Kids')
        } 
      })
    }else if(text == 'clothing children'){
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'clothing children')
        } 
      })
    }else if(text == 'party-supplies'){
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'party-supplies')
        } 
      })
    }else if(text == 'Fashion'){
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.ShowFilterArray = res.filter((res: any) => res.category == 'Fashion')
        } 
      })
      console.log(this.ShowFilterArray)
    }
  }




  filterSearshProduct(e: any) {
    const value = e.target.value;
    this.contentsearchone = true;
    this.contentsearchtwo = false;
    if (value === '') {
      this.contentsearchone = false;
      this.contentsearchtwo = true;
      this.filtervalue = [];
      return;
    }
    this.services.GetAllproduct('product/All').subscribe({
      next: (res: any) => {
        this.filtervalue = res.filter((res: any) => res.category === value);
        console.log(this.filtervalue);
      },
      error: (err) => {
        console.error("Error fetching products:", err);
      }
    });
  }

  GetAllProduct() {
    this.services.GetAllproduct('product/All').subscribe({
      next: (res: any) => {
        this.filteredProducts.push(
          res.find((item: any) => item.category === 'Fashion'),
          res.find((item: any) => item.category === 'school-bag'),
          res.find((item: any) => item.category === 'party-supplies'),
          res.find((item: any) => item.category === 'clothing children'),
          res.find((item: any) => item.category === 'Kids'),
          res.find((item: any) => item.category === 'Beatuy'),
          res.find((item: any) => item.category === 'clothing Womens'),
          res.find((item: any) => item.category === 'Acceroies Mopile')
        );
      }
    })
  }


  ShowDropDownMenue(){
    this.ShowDropDown = !this.ShowDropDown
  }
}

