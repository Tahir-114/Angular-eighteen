import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuardService } from './auth-guard.service';
import { ErrorMessageComponent } from './error-message/error-message.component';

const appRoutes: Routes =[
  {path: '' , component:HomeComponent},
  {path: 'users' , component:UserComponent , children:[
    {path: ':id/:name' , component:UserComponent}
  ]},
  {path: 'servers' , canActivate:[AuthGuardService], component:ServersComponent , children:[
    {path: ':id' , component:ServerComponent},
    {path: ':id/edit' , component:EditServerComponent}
  ]},
  {path: '**' , component:NotFoundComponent},
  {path: 'not-found' , component:ErrorMessageComponent , data:{message:'Page Not Found!'}},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
