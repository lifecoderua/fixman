import { Component, OnInit } from 'angular-ts-decorators';

@Component({
    selector: 'welcome',
    template: require('./welcome.component.html'),
    styles: [require('./welcome.component.scss')],
})
export class WelcomeComponent implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
