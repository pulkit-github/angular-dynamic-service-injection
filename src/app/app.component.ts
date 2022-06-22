import { Component, VERSION, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { S1Service } from './s1.service';
import { S2Service } from './s2.service';
import { ServiceConfig, SERVICE_CONFIG } from './service.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: S1Service,
      useFactory: (config: ServiceConfig, http: HttpClient) => {
        return config.whichService === 's1'
          ? new S1Service(http)
          : new S2Service(http);
      },
      deps: [SERVICE_CONFIG, HttpClient],
    },
  ],
})
export class AppComponent {
  response: Observable<any>;
  constructor(
    @Inject(SERVICE_CONFIG) private config: ServiceConfig,
    private apicall: S1Service
  ) {}
  s1Call() {
    this.config.whichService = 's1';
    this.callApi();
  }
  s2Call() {
    this.config.whichService = 's2';
    this.callApi();
  }
  callApi() {
    this.response = this.apicall.request();
  }
}
