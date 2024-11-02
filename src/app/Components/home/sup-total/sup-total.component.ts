import { Component } from '@angular/core';

@Component({
  selector: 'app-sup-total',
  templateUrl: './sup-total.component.html',
  styleUrl: './sup-total.component.css'
})
export class SupTotalComponent {
  cartData: any[] = [];
  findProduct: any;

  constructor() {
    this.GetMainDataFromLocalStorage()
  }




  GetMainDataFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const mainCart = localStorage.getItem('cartmainProduct');
      if (mainCart) {
        this.cartData = JSON.parse(mainCart);
        console.log(this.cartData)
      }
    }
  }
}

