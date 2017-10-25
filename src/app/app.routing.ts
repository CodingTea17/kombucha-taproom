import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
