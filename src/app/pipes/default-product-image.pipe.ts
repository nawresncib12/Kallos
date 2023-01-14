import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultProductImage'
})
export class DefaultProductImagePipe implements PipeTransform {

  transform(value: string): string {

    if (!value || ! value.trim() ) {
      return 'assets/images/defaultProduct.jpg';
    } else {
      return value
    }
  }

}
