import 'angular-material';
import 'angular-messages';
import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import 'angular-material/angular-material.css';
import {ContractorComponent} from './components/contractor/contractor.component';
import {HouseholdComponent} from './components/household/household.component';
import {OperatorComponent} from './components/operator/operator.component';
import {IssueService} from './services/issue.service';

@NgModule({
  id: 'AppModule',
  imports: [
    'ngMaterial',
    'ngMessages',
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlaygroundComponent,
    HouseholdComponent,
    OperatorComponent,
    ContractorComponent,
  ],
  providers: [
    IssueService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
