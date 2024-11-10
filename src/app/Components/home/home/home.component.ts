import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { EventEmitter, Output } from '@angular/core';
import { GenralService } from '../../../Shared/services/genral.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    dataHome: any[] = []
    constructor(private services: HomeService, private gs: GenralService) {
   this.ToggelShoWAndHideNavbar()
    }
    visible: boolean = false;
    images: any | undefined;
    EleData: any = '';
    mainimgs: string = ''
    cartmainarray: any[] = [];
    ToggelSidebar: any
    storageArrayLength:any
mainProdcut:any

    ngOnInit() {
        this.dataHome = this.services.AllDataHome()

    }



    showDialog() {
        this.visible = true;
    }


    ToggelShoWAndHideNavbar() {
        this.gs.$mainProduct.subscribe({
            next:(res:any)=>{
this.mainProdcut = res            }
        })

        if (typeof localStorage !== 'undefined') {
            let storage = localStorage.getItem('cartmainProduct');
            if (storage) {
                this.storageArrayLength = JSON.parse(storage)
            }

        }
    }
}
