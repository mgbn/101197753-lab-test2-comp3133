import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, throwError, catchError } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root',
})
export class SpacexapiService {
  private BASE_URL = 'https://api.spacexdata.com/v3/';

  constructor(private httpClient: HttpClient) {}

  getAllMissions() {
    return this.httpClient.get<Mission>(`${this.BASE_URL}launches`);
  }

  getMissionByNumber(flightNumber: Number) {
    return this.httpClient.get<Mission>(
      `${this.BASE_URL}launches/${flightNumber}`
    );
  }
}
