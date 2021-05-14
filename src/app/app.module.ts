import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardGalleryComponent } from './dashboard-gallery/dashboard-gallery.component';
import { DashboardStylePipe } from './dashboard-gallery/dashboard-style.pipe';
import { DashboardStatusPipe } from './dashboard-gallery/dashboard-status.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardGalleryComponent,
    DashboardStatusPipe,
    DashboardStylePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
