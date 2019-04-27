# Introduction

This is a prototype project for tech testing implementing 3-side collaboration between households, contractors and coordinators.

# Technology

- Core BE: Laravel | Rails 6rc | Go;
- Client communication: SSE/Node/Go;
- Client AngularJS/VueJS;
- UI: Material;

## Extra techs to test

- Containers: Docker;
- RBAC: Okta;
- (?) to consider: Consul, Prometheus, Drone, Nomad/Ansible;
- PWA;

## Other

- Multiapp build generating separate applications for specific parties; shared component base usage;

# Main flow

- Household files an issue;
    - OR Operator files an issue on behalf of Household;
- Operator assign an issue type and urgency;
- System assign an issue to an available Contractor;
    - opt: Contractor should be in household vicinity;
    - Contractor should have a timeframe for urgent calls to be assigned;
    - opt/magic: evaluate movable assignments in order to clean up time for urgent calls;
- ISSUE: new
- Contractor accepts or pass an assignment;
- ISSUE: open
- Contractor marks he is on the way;
- ISSUE: en route
- ISSUE: in progress
- ISSUE: resolved
- Operator confirms issue is fixed;
    - OR Household confirms issue is fixed;
- ISSUE: confirmed


### Extra flows

- Household may blacklist/whitelist a Contractor;
    - System may whitelist a contractor to improve customer experience (with userWhitelisted > systemWhitelisted > regular);
- Operator may assign an issue manually;
- Operator may re-assign an issue;
- Contractor may specify his schedule;
- Contractor may pass an assignment;
- Issue may be re-opened;
    - indicate higher priority on re-open - we need extra attention here!
- Household history dashboard: may be useful to locate household-specific issues and find potential problems/points of interest;
    - a lot of problems from a single field may be a warn sign for bad infrastructure (opportunity to propose improvement => loyal customers), or issues with a contractor;
    - programmatic test and general dashboard with indications: median levels, peak cases, confirmed/reviewed flag (timestamped to prevent checks affect the case forever) for checked households;

## Household

- file issue form | call | callback
- monitor issues: progress | estimation | contact

## Contractor

- list own daily issues
- status interaction: en route/start/done/reject/transfer
- map for next place commute
- issue photo documentation
- call operator / core tech team

## Operator

- file new issue
    - type | description | assign issue
- view all issues
- mark issues with overdue | call contractor | call household
