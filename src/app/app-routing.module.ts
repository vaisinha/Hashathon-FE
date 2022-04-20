import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AngularPageComponent } from './Components/angular-page/angular-page.component';
import { HomeComponent } from './Components/home/home.component';
import { HtmlpageComponent} from './Components/htmlpage/htmlpage.component'
import { EvaluatorDashboardComponent } from './evaluator-dashboard/evaluator-dashboard.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'HTML', component: HtmlpageComponent },
  { path: 'eval',component: EvaluatorDashboardComponent}
];

@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
