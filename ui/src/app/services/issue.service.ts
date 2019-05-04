import { Injectable } from 'angular-ts-decorators';

const issues = [
  { id: 1, description: 'stub-description-1', state: 'open', severity: 'medium' },
  { id: 2, description: 'stub-description-2', state: 'en route', severity: 'high' },
  { id: 3, description: 'stub-description-3', state: 'in progress', severity: 'medium' },
  { id: 4, description: 'stub-description-4', state: 'done', severity: 'low' },
  { id: 5, description: 'stub-description-5', state: 'resolved', severity: 'high' },
  { id: 6, description: 'stub-description-6', state: 'rejected', severity: 'medium' },
  { id: 7, description: 'stub-description-7', state: 'confirmed', severity: 'medium' },
];

@Injectable('issueService')
export class IssueService {

  /*@ngInject*/
  constructor() {
    // TODO: setup userId for requests. User type shouldn't be required since it's readable from ID.
  }

  async get() {
    return await Promise.resolve(issues);
  }
}
