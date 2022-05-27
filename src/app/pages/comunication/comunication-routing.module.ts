import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { IconsPageComponent } from './icons-page/icons-page.component'
import { ServiceOneComponent } from './service-one/service-one.component'
import { ServiceTwoComponent } from './service-two/service-two.component'

const routes: Routes = [
  {
    path: 'icons',
    component: IconsPageComponent
  },
  {
    path: 'service-one',
    component: ServiceOneComponent
  },
  {
    path: 'service-two',
    component: ServiceTwoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicationRoutingModule {}
