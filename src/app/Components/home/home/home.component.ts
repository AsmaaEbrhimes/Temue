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


    ngOnInit() {
        this.dataHome = this.services.AllDataHome()
    }

    // responsiveOptions: any[] = [
    //     {
    //         breakpoint: '1024px',
    //         numVisible: 5
    //     },
    //     {
    //         breakpoint: '768px',
    //         numVisible: 3
    //     },
    //     {
    //         breakpoint: '560px',
    //         numVisible: 1
    //     }
    // ];


    showDialog() {
        this.visible = true;
    }

}