import { Component, OnInit } from 'angular-ts-decorators';
import {IssueService} from '../../services/issue.service';

@Component({
    selector: 'contractor',
    template: require('./contractor.component.html'),
    styles: [require('./contractor.component.scss')],
})
export class ContractorComponent implements OnInit {
  private issues;

  /*@ngInject*/
  constructor(private issueService: IssueService) { }

  async ngOnInit() {
    this.issues = await this.issueService.get();
  }
}
