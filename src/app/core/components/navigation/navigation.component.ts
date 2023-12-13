import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
})
export class NavigationComponent {
  @Input() isSidenavHidden!: boolean;
  @Output() isSidenavHiddenChange = new EventEmitter<boolean>();

  toggleSidenavVisibility(): void {
    const value = !this.isSidenavHidden;
    return this.isSidenavHiddenChange.emit(value);
  }
}
