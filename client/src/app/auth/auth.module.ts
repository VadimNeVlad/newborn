import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignedUpComponent } from './signed-up/signed-up.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthEffects } from '../store/auth/auth.effects';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [SignedUpComponent, SignedInComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
