import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [],
  template: `
  <div *ngIf="missionDetails">
    <h2>{{ missionDetails.mission_name }}</h2>
    <p>{{ missionDetails.details }}</p>
    <!-- Add more fields as needed -->
  </div>
`,
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() flightNumber: number;
  missionDetails: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`https://api.spacexdata.com/v3/launches/${this.flightNumber}`).subscribe(data => {
      this.missionDetails = data;
    });
  }
}
