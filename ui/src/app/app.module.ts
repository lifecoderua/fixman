import 'angular-material';
import 'angular-messages';
import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { WelcomeComponent } from './welcome/welcome.component';

import 'angular-material/angular-material.css';
import {ContractorComponent} from './contractor/contractor.component';
import {HouseholdComponent} from './household/household.component';
import {OperatorComponent} from './operator/operator.component';

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
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
