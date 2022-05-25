import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { PopupPageComponent } from './pages/popup/containers'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
    component: PopupPageComponent
  }
  // {
  //   path: 'typography',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
  // },
  // {
  //   path: 'tables',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  // },
  // {
  //   path: 'notification',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule)
  // },
  // {
  //   path: 'ui',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  // },
  // {
  //   path: '404',
  //   component: NotFoundComponent
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
