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
    constructor(private services: HomeService) { }

    visible: boolean = false;

    images: any | undefined;
    EleData: any = '';
    mainimgs: string = ''
    cartmainarray: any[] = []; 



    ngOnInit() {
        this.dataHome = this.services.AllDataHome()

    }

   

    showDialog() {
        this.visible = true;
    }


    

}

