import { Component, OnInit, Input } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missionList: any;

  constructor(private spacexapiService: SpacexapiService) {}

  ngOnInit(): void {
    this.spacexapiService.getAllMissions().subscribe((data) => {
      console.log(data);
      this.missionList = data;
    });
  }
}
