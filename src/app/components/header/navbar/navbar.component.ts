import { Component } from '@angular/core';
import { MenuItems } from 'src/app/interfaces/menu/menu-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuItems: MenuItems[] = [
    {
      title: 'Accueil',
      link: '/',
      fragment: 'accueil'
    },
    {
      title: 'Produits',
      link: '/',
      fragment: 'produits'
    },
    {
      title: 'Tarifs',
      link: '/',
      fragment: 'tarifs'
    },
    {
      title: 'Contact',
      link: '/',
      fragment: 'contact'
    },
    {
      title: 'À propos',
      link: '/',
      fragment: 'about'
    },
    {
      title: 'Avis clients',
      link: '/',
      fragment: 'avis-clients'
    },
    {
      title: 'FAQ',
      link: '/',
      fragment: 'faq'
    },
  ];

  isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  closeMenu(): void {
    this.isOpen = false;
  }
}
