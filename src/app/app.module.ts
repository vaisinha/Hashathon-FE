import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvaluatorDashboardComponent } from './evaluator-dashboard/evaluator-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { TracksComponent } from './Components/tracks/tracks.component';
import { HelperDetailsComponent } from './Components/helper-details/helper-details.component';
import { HtmlpageComponent } from './Components/htmlpage/htmlpage.component';
import { HtmlcontentComponent } from './Components/htmlcontent/htmlcontent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularPageComponent } from './Components/angular-page/angular-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluatorDashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    TracksComponent,
    HelperDetailsComponent,
    HtmlpageComponent,
    HtmlcontentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
