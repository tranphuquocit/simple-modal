import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LuckyWheelService {
  constructor(
    private http: HttpClient
  ) { }
  API = {
    urlDev: 'https://api.dev.icheck.vn',
    public: '/api/business/public/loyalty/',
    auth: '/api/business/loyalty/'
  }

  getCampaign(param): Observable<any> {
    let object = {
      target: param.target,
      // phone: param.phone
    }
    return this.http.get(`${this.API.urlDev}${this.API.public}campaign/get-campaign`, { params: object })
  }

  getTurnFromCode(body): Observable<any> {
    return this.http.post(`${this.API.urlDev}${this.API.auth}customer/campaign/game`, body);
  }

  getTurnCount(param): Observable<any> {
    let object = {
      campaign_id: param.campaign_id,
      phone: param.phone
    }
    return this.http.get(`${this.API.urlDev}${this.API.public}campaign/time-play`, { params: object })
  }

  enterCodeGetTurn(body): Observable<any> {
    return this.http.post(`${this.API.urlDev}${this.API.public}campaign/take-time-play`, body);
  }

}
