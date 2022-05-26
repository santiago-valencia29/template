import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './containers'

import { AngularMaterialModule } from 'src/app/app-material.module'
import {
  EmailComponent,
  NotificationsComponent,
  UserComponent
} from './components'
import { ShortNamePipe } from './pipes'
import { HeaderBasicComponent } from './containers/header-basic/header-basic.component'

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [
    HeaderComponent,
    HeaderBasicComponent,
    NotificationsComponent,
    EmailComponent,
    UserComponent,
    ShortNamePipe
  ],
  exports: [HeaderComponent, HeaderBasicComponent]
})
export class HeaderModule {}
