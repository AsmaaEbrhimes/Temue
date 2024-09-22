import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    dataHome:any[]=[]

    constructor(private services:HomeService){}

    visible: boolean = false;
    visible2: boolean = false;

    images: any | undefined;
    EleData: any = '';


    ngOnInit() {
        this.dataHome = this.services.AllDataHome()
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


    showDialog2(id: number) {
        this.dataHome.map((ele: any) => {
            if (ele.id === id) {
                this.EleData = ele
                console.log("ele.images", ele.images)
                console.log("يارب", ele)
                this.images = [
                    {
                        itemImageSrc: ele.img1,
                        thumbnailImageSrc: ele.img1,
                    },
                    {
                        itemImageSrc: ele.img2,
                        thumbnailImageSrc: ele.img2,
                    },
                    {
                        itemImageSrc: ele.img3,
                        thumbnailImageSrc: ele.img3,
                    },
                ];
                console.log('kkkkkk', this.EleData)
            }
        })
        this.visible2 = true;
    }

















}
