import { StateProvider } from '@uirouter/angularjs';
import '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import {ContractorComponent} from './components/contractor/contractor.component';
import {HouseholdComponent} from './components/household/household.component';
import {OperatorComponent} from './components/operator/operator.component';
import {PlaygroundComponent} from './components/playground/playground.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}

const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'welcome' },
  { name: 'welcome', url: '/welcome', component: WelcomeComponent },
  { name: 'playground', url: '/playground', component: PlaygroundComponent },
  { name: 'household', url: '/household', component: HouseholdComponent },
  { name: 'operator', url: '/operator', component: OperatorComponent },
  { name: 'contractor', url: '/contractor', component: ContractorComponent },
];

@NgModule({
  id: 'AppRoutingModule',
  imports: [
    'ui.router'
  ],
})
export class AppRoutingModule {
  static config($stateProvider: StateProvider) {
    'ngInject';
    routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
  }
}

function getNg1StateDeclaration(state: UiState) {
  if (state.component && typeof state.component !== 'string') {
    state.component = getTypeName(state.component);
  }
  return state;
}

