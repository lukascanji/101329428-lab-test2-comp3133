import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [],
  template: `
    <p>
      mission-list works!
    </p>
  `,
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent {
  constructor(private http: HttpClient) { }

  getMissionsByYear(year: number) {
    return this.http.get(`api/missions?year=${year}`);
  }
}
