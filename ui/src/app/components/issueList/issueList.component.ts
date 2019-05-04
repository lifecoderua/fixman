import {Component, Input, OnInit} from 'angular-ts-decorators';

@Component({
    selector: 'issue-list',
    template: require('./issueList.component.html'),
    styles: [require('./issueList.component.scss')],
})
export class IssueListComponent implements OnInit {
  @Input() issues;

  /*@ngInject*/
  constructor() { }

  ngOnInit() { }
}
