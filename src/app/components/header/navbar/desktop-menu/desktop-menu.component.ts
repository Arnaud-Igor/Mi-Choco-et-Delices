import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.css'],
})
export class DesktopMenuComponent {
  @Input() menuItems: any[] = [];

  activeLink: string = 'accueil';

  setActiveLink(fragment: string): void {
    this.activeLink = fragment;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + 80; // Ajuste selon la hauteur du navbar
    for (const item of this.menuItems) {
      const section = document.getElementById(item.fragment);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          this.activeLink = item.fragment;
        }
      }
    }
  }
}
