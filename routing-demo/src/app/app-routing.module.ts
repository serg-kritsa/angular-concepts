import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from '../app/servers/edit-server/edit-server.component';
import { ServerComponent } from '../app/servers/server/server.component';
import { ServersComponent } from '../app/servers/servers.component';
import { UserComponent } from '../app/users/user/user.component';
import { UsersComponent } from '../app/users/users.component';
import { HomeComponent } from '../app/home/home.component';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:[
    { path: ':id/:name', component: UserComponent },
  ] },
  { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' },
  // NOTE!: { path: '', redirectTo: '/not-found' }, // will cause permanent redirect, to fix use { path: '', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
