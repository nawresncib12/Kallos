import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { AppTitleComponent } from './app-title/app-title.component';
import { ButtonComponent } from './button/button.component';
import { ScrollDownButtonComponent } from './scroll-down-button/scroll-down-button.component';
import { HoverClassDirective } from './directives/hover-class.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarButtonComponent } from './navbar-button/navbar-button.component';
import { SplashTextComponent } from './splash-text/splash-text.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    AppTitleComponent,
    ButtonComponent,
    ScrollDownButtonComponent,
    HoverClassDirective,
    NavbarComponent,
    NavbarButtonComponent,
    SplashTextComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BreadcrumbsComponent,
    AppTitleComponent,
    ButtonComponent,
    ScrollDownButtonComponent,
    NavbarButtonComponent,
    NavbarComponent,
    SplashTextComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
