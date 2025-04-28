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
    });
  }

  toggleMenu() {
    if (this.screenSizeClass === 'mobile') {
      this.isMenuHidden = !this.isMenuHidden;
    }
  }

}
