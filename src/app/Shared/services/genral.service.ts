import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenralService {
   $ShowSuccess = new BehaviorSubject<boolean>(false);
  constructor() { }

}
