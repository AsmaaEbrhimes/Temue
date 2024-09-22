import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HomeService } from "../home.service";

@Component({
  selector: 'app-dtails-product',
  templateUrl: './dtails-product.component.html',
  styleUrl: './dtails-product.component.css'
})

export class DtailsProductComponent {
  Id: any = ''
  objectDta:any=''
  main_img:any
  main_video:any
  showVideo:boolean=false
  showImg:boolean=true
  constructor(private route: ActivatedRoute, private services: HomeService) { }

  ngOnInit(): void {
    this.GetParamsId()
    this.GetDataDetailsProduct()
  }


  GetParamsId() {
    this.Id = this.route.snapshot.paramMap.get('id')
  }

  GetDataDetailsProduct() {
    const data = this.services.AllDataHome()
    this.objectDta  = data.find((ele:any)=>ele.id == this.Id)
    this.main_img = 'assets/imges/' + this.objectDta.img1;
    this.main_video = 'assets/videos/' + this.objectDta.video 

  }

  sliderImg(e:MouseEvent){
    const target = e.target as HTMLImageElement;
    const srcWithoutBaseUrl = target.src.replace('http://localhost:4200/', '');
    this.main_img = srcWithoutBaseUrl
    this.showVideo = false 
    this.showImg = true
  }

  sliderVideo(e:any){
    const target = e.target.src
    const srcVideo= target.replace('http://localhost:58712', '')
    this.showVideo = srcVideo
    this.showVideo = true 
    this.showImg = false

  }
}