import { Component } from '@angular/core';
import randomColor from 'randomcolor';
import { ColormanagerService } from './colormanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'David Schlachter';
  color_1 = '#fff'
  color_2 = '#fff'
  
  chooseColors() {
    this.color_1 = randomColor({luminosity: 'dark'});
    var i = 0;
    this.color_2 = this.colorService.shadeColor2(this.color_1, i);
    var brightness1 = this.colorService.hexBrightness(this.color_1);
    var brightness2 = this.colorService.hexBrightness(this.color_2);

    while (Math.abs(brightness2 - brightness1) < 127.5) {
      i = i + 0.05;
      this.color_2 = this.colorService.shadeColor2(this.color_1, i);
      brightness2 = this.colorService.hexBrightness(this.color_2);
      if (i > 1.0) break;
    }

    const rgbcolor = this.colorService.hexToRgb(this.color_1);
    const hslcolor = this.colorService.rgbToHsl(rgbcolor.r, rgbcolor.g, rgbcolor.b);
  }
  
  constructor( private colorService: ColormanagerService ) { this.chooseColors() }
  
}
