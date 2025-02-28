import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { LogoComponent } from './components/header/navbar/logo/logo.component';
import { DesktopMenuComponent } from './components/header/navbar/desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from './components/header/navbar/mobile-menu/mobile-menu.component';
import { ToggleMenuComponent } from './components/header/navbar/toggle-menu/toggle-menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { PartnerComponent } from './components/partner/partner.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServiceComponent } from './components/service/service.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReadyToStartComponent } from './components/ready-to-start/ready-to-start.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { TarificationComponent } from './components/tarification/tarification.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    DesktopMenuComponent,
    MobileMenuComponent,
    ToggleMenuComponent,
    HeroComponent,
    PartnerComponent,
    SliderComponent,
    FeaturesComponent,
    ServiceComponent,
    FaqComponent,
    ReadyToStartComponent,
    FooterComponent,
    TestimonialsComponent,
    TimeLineComponent,
    TarificationComponent,
    ContactComponent,
    AboutComponent,
    TeamComponent,
    HeroBannerComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
