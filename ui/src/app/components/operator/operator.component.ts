import { Component, OnInit } from 'angular-ts-decorators';

@Component({
    selector: 'operator',
    template: require('./operator.component.html'),
    styles: [require('./operator.component.scss')],
})
export class OperatorComponent implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
