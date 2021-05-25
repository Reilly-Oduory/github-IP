import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepUIComponent } from './rep-ui/rep-ui.component';
import { UserUIComponent } from './user-ui/user-ui.component';

const routes: Routes = [
    { path: 'users', component: UserUIComponent },
    { path: 'repos', component: RepUIComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }