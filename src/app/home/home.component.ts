import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  showComponent: boolean = false;

  toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }
}