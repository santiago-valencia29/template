import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotificationPageComponent } from './containers/notification-page/notification-page.component'
import { NotificationRoutingModule } from './notification-routing.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    NotificationRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  declarations: [NotificationPageComponent],
  exports: [NotificationPageComponent]
})
export class NotificationModule {}
