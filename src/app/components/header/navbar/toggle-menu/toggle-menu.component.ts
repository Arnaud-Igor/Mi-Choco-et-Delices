import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleMenu = new EventEmitter<void>();

  onToggleMenu(): void {
    this.toggleMenu.emit();
  }
}
