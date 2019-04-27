import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  id: 'AppModule',
  imports: [
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
