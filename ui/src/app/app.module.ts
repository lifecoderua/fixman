import 'angular-material';
import 'angular-messages';
import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
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
    PlaygroundComponent,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
