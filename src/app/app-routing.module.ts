import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { PopupPageComponent } from './pages/popup/containers'

const routes: Routes = [
  {
    path: 'popup',
    pathMatch: 'full',
    component: PopupPageComponent
  },
  { path: '', pathMatch: 'full', redirectTo: 'popup' },
  {
    path: 'typography',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/typography/typography.module').then(
        (m) => m.TypographyModule
      )
  },
  {
    path: 'tables',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/tables/tables.module').then((m) => m.TablesModule)
  },
  {
    path: 'notification',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/notification/notification.module').then(
        (m) => m.NotificationModule
      )
  }

  // {
  //   path: 'ui',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/ui-elements/ui-elements.module').then(m => m.UiElementsModule)
  // },
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
