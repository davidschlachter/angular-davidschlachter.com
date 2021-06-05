import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColormanagerService {

  constructor() { }
  
  hexToRgb(a: string): any {
  	var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  	return e ? {
  		r: parseInt(e[1], 16),
  		g: parseInt(e[2], 16),
  		b: parseInt(e[3], 16)
  	} : null
  }

  rgbToHsl(a: number, e: number, r: number): number[] {
  	a /= 255, e /= 255, r /= 255;
  	var s, c, t = Math.max(a, e, r),
  		i = Math.min(a, e, r),
  		n = (t + i) / 2;
  	if (t == i) s = c = 0;
  	else {
  		var b = t - i;
  		switch (c = n > .5 ? b / (2 - t - i) : b / (t + i), t) {
  		case a:
  			s = (e - r) / b + (r > e ? 6 : 0);
  			break;
  		case e:
  			s = (r - a) / b + 2;
  			break;
  		case r:
  			s = (a - e) / b + 4
  		}
      if (typeof(s) == 'undefined') s = 0
  		s /= 6
  	}
  	return [s, c, n]
  }

  shadeColor2(color: string, percent: number): string {
  	var f = parseInt(color.slice(1), 16),
  		t = percent < 0 ? 0 : 255,
  		p = percent < 0 ? percent * -1 : percent,
  		R = f >> 16,
  		G = f >> 8 & 0x00FF,
  		B = f & 0x0000FF;
  	return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

  hexBrightness(color: string): number {
  
    let r = parseInt(color.substr(1,2), 16);
    let g = parseInt(color.substr(3,2), 16);
    let b = parseInt(color.substr(5,2), 16);
  
    let brightness = (299*r + 587*g + 114*b) / 1000;
  
    return brightness;
  
  }
  
}
