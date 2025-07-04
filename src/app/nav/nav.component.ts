import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  screenSizeClass = '';
  isMenuHidden = false; // nuevo estado del menú

  constructor (
    private responsiveService: ResponsiveService
  ) {}


  ngOnInit(): void {
    this.responsiveService.screenSizeClass$.subscribe(className => {
      this.screenSizeClass = className;
      // Cuando cambias de tamaño, siempre mostramos el menú en desktop/tablet
      if (className !== 'mobile') {
        this.isMenuHidden = false;
      }
      else {
        this.isMenuHidden = true; // ocultar el menú en mobile
      }
    });
  }

  toggleMenu() {
    if (this.screenSizeClass === 'mobile') {
      this.isMenuHidden = !this.isMenuHidden;
    }
    else {
      this.isMenuHidden = false; // aseguramos que el menú esté visible en desktop/tablet
    }
  }

  scrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.toggleMenu() // ocultar el menú después de hacer scroll
    }
  }
  

}
