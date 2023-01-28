import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  cubes: undefined[] = new Array(25);
  mouseOn(e:any) {
    e.currentTarget.style.cssText = 'background-color:black';
  }
}
