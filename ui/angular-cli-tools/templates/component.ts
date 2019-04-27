import { Component, OnInit } from 'angular-ts-decorators';

@Component({
    selector: '$selectorPrefix$$kebabCaseName$',
    template: require('./$name$.component.html'),
    styles: [require('./$name$.component.scss')],
})
export class $PascalCaseName$Component implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
