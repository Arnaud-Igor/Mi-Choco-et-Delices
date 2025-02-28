import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
})
export class MobileMenuComponent {
  @Input() menuItems: any[] = [];

  @Output() closeMenu = new EventEmitter<void>();

  onCloseMenu(): void {
    this.closeMenu.emit();
  }

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
