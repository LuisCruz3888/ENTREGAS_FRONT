import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  
  private screenSizeClass = new BehaviorSubject<string>('');
  screenSizeClass$ = this.screenSizeClass.asObservable();

  constructor(private ngZone: NgZone) {
    this.setScreenSizeClass();
    window.addEventListener('resize', () => {
      this.ngZone.run(() => this.setScreenSizeClass());
    });
  }

  
  private setScreenSizeClass() {
    const width = window.innerWidth;
    if (width < 768) {
      this.screenSizeClass.next('mobile');
    } else if (width >= 768 && width < 1024) {
      this.screenSizeClass.next('tablet');
    } else {
      this.screenSizeClass.next('desktop');
    }
  }

}
