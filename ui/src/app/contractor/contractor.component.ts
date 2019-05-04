import { Component, OnInit } from 'angular-ts-decorators';

@Component({
    selector: 'contractor',
    template: require('./contractor.component.html'),
    styles: [require('./contractor.component.scss')],
})
export class ContractorComponent implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
