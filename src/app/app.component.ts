import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionListComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css',
  template: `
  <main>
  <app-mission-list></app-mission-list>
  </main>
  `
  
})
export class AppComponent {
  title = '101329428-lab-test2-comp3133';
}
