import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ApiResponse} from "../../data/types";

@Injectable({
  providedIn: 'root'
})
export class ToasterService extends  ToastrService{

  displayApiResponseToast(apiResponse: ApiResponse<any>) {
    if (apiResponse.isO)
  }

}
