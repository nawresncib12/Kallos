import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import ApiResponse from "../../data/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  toaster: ToastrService;

  constructor(toaster: ToastrService) {
    this.toaster = toaster
  }

  toastApiResponse(apiResponse: ApiResponse<any>) {
    if (apiResponse.isOk()) {
      this.toaster.success(apiResponse.message?.length ? apiResponse.message : "success")
    } else {
      this.toaster.error(apiResponse.message?.length ? apiResponse.message : "error")
    }
  }

}
