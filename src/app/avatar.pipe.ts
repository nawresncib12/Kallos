import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: number): string {
    return `assets/images/avatars/avatar-${value}.svg`;
  }
}
