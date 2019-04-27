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

## Household

- file issue | call | callback
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
