import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageDistance',
})
export class AgeDistancePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    if (
      new Date().getMonth() < value.getMonth() ||
      (new Date().getMonth() == value.getMonth() &&
        new Date().getDate() < value.getDate())
    ) {
      return String(
        Math.abs(new Date().getFullYear() - value.getFullYear()) - 1
      );
    }
    if (
      (new Date().getMonth() == value.getMonth() &&
        new Date().getDate() === value.getDate()) ||
      new Date().getMonth() > value.getMonth() ||
      (new Date().getMonth() == value.getMonth() &&
        new Date().getDate() > value.getDate())
    ) {
      return String(Math.abs(new Date().getFullYear() - value.getFullYear()));
    }
    return String(value);
  }
}
