import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Favorites } from './pages/favorites/favorites';
import { Home } from './pages/home/home';
import { ShowDetail } from './pages/show-detail/show-detail';
import { adultGuard } from './guards/adult-guard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'favorites', component: Favorites },
      { path: 'show/:id', component: ShowDetail, canActivate: [adultGuard] },
    ],
  },
  { path: '**', redirectTo: '' },
];
