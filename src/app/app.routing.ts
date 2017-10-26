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
    component: MenuComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
