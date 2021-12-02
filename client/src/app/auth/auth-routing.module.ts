import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/guards/login.guard';
import { AuthComponent } from './auth.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { SignedUpComponent } from './signed-up/signed-up.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: AuthComponent,
    children: [
      {
        path: '',
        component: SignedInComponent,
      },
      {
        path: 'signup',
        component: SignedUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
