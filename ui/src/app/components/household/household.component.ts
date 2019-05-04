import { Component, OnInit } from 'angular-ts-decorators';
import {IssueService} from '../../services/issue.service';

@Component({
    selector: 'household',
    template: require('./household.component.html'),
    styles: [require('./household.component.scss')],
})
export class HouseholdComponent implements OnInit {
  private issues;

  /*@ngInject*/
  constructor(private issueService: IssueService) { }

  async ngOnInit() {
    this.issues = await this.issueService.get();
  }
}
