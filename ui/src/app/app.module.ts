import 'angular-material';
import 'angular-messages';
import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import 'angular-material/angular-material.css';

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
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
