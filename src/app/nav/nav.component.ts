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

  constructor (
    private responsiveService: ResponsiveService
  ) {}


  ngOnInit(): void {
    this.responsiveService.screenSizeClass$.subscribe(className => {
      this.screenSizeClass = className;
    });
  }

  toggleMenu() {
    var navbar = document.getElementById('navbarSupportedContent');
    navbar?.classList.toggle('active');
  }

}
