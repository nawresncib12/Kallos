import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: number | undefined): string {
    const avatar = value || 1;
    return `assets/images/avatars/avatar-${avatar}.svg`;
  }
}
