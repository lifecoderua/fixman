import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { $PascalCaseName$Component } from './$name$.component';

const routes: Routes = [
    { path: '', component: $PascalCaseName$Component },
];

export const $PascalCaseName$Routing: ModuleWithProviders = RouterModule.forChild(routes);
