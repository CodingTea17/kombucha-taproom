import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PublicComponent } from './public/public.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'admin',
    component: MenuComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
