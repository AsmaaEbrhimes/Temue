import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import {  EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    dataHome: any[] = []
   // currentIndex: number = 1
    constructor(private services: HomeService) { }

    visible: boolean = false;
   // visible2: boolean = false;

    images: any | undefined;
    EleData: any = '';
    mainimgs: string = ''


    ngOnInit() {
        this.dataHome = this.services.AllDataHome()
      //  this.mouseHoverImg()
    }

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];


    showDialog() {
        this.visible = true;
    }


    // showDialog2(id: number) {
    //     this.dataHome.map((ele: any) => {
    //         if (ele.id === id) {
    //             this.EleData = ele
    //             this.images = [
    //                 {
    //                     itemImageSrc: ele.img1,
    //                     thumbnailImageSrc: ele.img1,
    //                 },
    //                 {
    //                     itemImageSrc: ele.img2,
    //                     thumbnailImageSrc: ele.img2,
    //                 },
    //                 {
    //                     itemImageSrc: ele.img3,
    //                     thumbnailImageSrc: ele.img3,
    //                 },
    //             ];
    //             this.mouseHoverImg();
    //         }
    //     })
    //     this.visible2 = true;
    // }





    // mouseHoverImg() {
    //     this.mainimgs = 'assets/imges/' + (this.EleData[`img${this.currentIndex}`] || 'default.webp');

    // }

    
    // sliderprefbutton() {
    //     if (this.currentIndex < 3) {
    //         this.currentIndex++;
    //         this.mouseHoverImg();
    //     }
    // }

    // sliderNextbutton() {
    //     if (this.currentIndex > 1) {
    //         this.currentIndex--
    //         this.mouseHoverImg();
    //     }
    // }















}
