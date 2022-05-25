import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './containers'

import { AngularMaterialModule } from 'src/app/app-material.module'
import {
  EmailComponent,
  NotificationsComponent,
  SearchComponent,
  UserComponent
} from './components'
import { ShortNamePipe } from './pipes'

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  declarations: [
    HeaderComponent,
    SearchComponent,
    NotificationsComponent,
    EmailComponent,
    UserComponent,
    ShortNamePipe
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {}
