import { Component, OnInit, Input } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute } from '@angular/router';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  missionDetail!: Mission;

  constructor(
    private spacexapiService: SpacexapiService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.spacexapiService
      .getMissionByNumber(this.router.snapshot.params['id'])
      .subscribe((data) => {
        this.missionDetail = data;
      });
  }
}
