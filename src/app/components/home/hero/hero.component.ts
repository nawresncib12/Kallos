import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  moreSection: HTMLElement | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.moreSection = document.getElementById('more');
  }

  navigateToCatalogue() {
    this.router.navigate(['/products']);
  }
  more() {
    console.log(this.moreSection);
    if (this.moreSection) {
      this.moreSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
