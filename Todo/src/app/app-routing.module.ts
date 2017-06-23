import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'todo', component: TodoComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

/**
 * Décorateur 
 */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}