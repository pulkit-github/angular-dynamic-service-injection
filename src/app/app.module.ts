import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { I1, I2, MyInterceptor } from './interceptors';
import { S1Service } from './s1.service';
import { S2Service } from './s2.service';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    { provide: S1Service, useClass: S1Service },
    { provide: S2Service, useClass: S2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
