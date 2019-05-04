import {Component, Input, OnInit} from 'angular-ts-decorators';

@Component({
    selector: 'issue',
    template: require('./issue.component.html'),
    styles: [require('./issue.component.scss')],
})
export class IssueComponent implements OnInit {
  @Input() issue;

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
