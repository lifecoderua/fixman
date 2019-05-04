import { Component, OnInit } from 'angular-ts-decorators';
import {IssueService} from '../../services/issue.service';

@Component({
    selector: 'operator',
    template: require('./operator.component.html'),
    styles: [require('./operator.component.scss')],
})
export class OperatorComponent implements OnInit {
  private issues;

  /*@ngInject*/
  constructor(private issueService: IssueService) { }

  async ngOnInit() {
    this.issues = await this.issueService.get();
  }
}
