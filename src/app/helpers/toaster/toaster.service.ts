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
    const response = new ApiResponse(apiResponse)
    if (response.isOk()) {
      this.toaster.success(response.message?.length ? response.message : "success")
    } else {
      this.toaster.error(response.message?.length ? response.message : "an error has occurred")
    }
  }

}
