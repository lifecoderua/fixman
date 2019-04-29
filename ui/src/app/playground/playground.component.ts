import { Component, OnInit } from 'angular-ts-decorators';

@Component({
    selector: 'playground',
    template: require('./playground.component.html'),
    styles: [require('./playground.component.scss')],
})
export class PlaygroundComponent implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
