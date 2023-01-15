import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class DisplayAPIResponseService {

  constructor(private toastr: ToastrService) { }


  display(){

  }
}
