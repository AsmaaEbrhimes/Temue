import { Component } from '@angular/core';
import { GenralService } from '../../../Shared/services/genral.service';

@Component({
  selector: 'app-sup-total',
  templateUrl: './sup-total.component.html',
  styleUrl: './sup-total.component.css'
})
export class SupTotalComponent {
  cartData: any[] = [];
  findProduct: any;

  constructor(private gs: GenralService) {
    this.GetMainDataFromLocalStorage()
  }




 


  GetMainDataFromLocalStorage() {
    this.gs.$mainProduct.subscribe({
      next: (res: any) => {
        if (res && res.length > 0) {
          this.cartData = res;
        } else {
          if (typeof localStorage !== 'undefined') {
            const mainCart = localStorage.getItem('cartmainProduct');
            if (mainCart) {
              this.cartData = JSON.parse(mainCart);
            }
          } 
        }
      }
    });
  }
}

