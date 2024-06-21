import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutes } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutes,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
