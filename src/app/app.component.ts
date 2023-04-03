import { Component } from '@angular/core';
import { Mission } from './models/mission';
import { SpacexapiService } from './network/spacexapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '101197753-lab-test2-comp3133';
  missionList?: Mission;
  isReady?: true;

  constructor(private spacexapiService: SpacexapiService) {
    this.getMissionData();
  }

  getMissionData() {
    this.spacexapiService.getAllMissions().subscribe((data) => {
      console.log(data);
      this.missionList = data;
    });
  }

  
}
