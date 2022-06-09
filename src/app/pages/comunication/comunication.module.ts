import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconsPageComponent } from './icons-page/icons-page.component'
import { ServiceOneComponent } from './service-one/service-one.component'
import { ServiceTwoComponent } from './service-two/service-two.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { ComunicationRoutingModule } from './comunication-routing.module'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { CalendarComponent } from './calendar/calendar.component'

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
    ComunicationRoutingModule,
    HeaderModule
  ],
  declarations: [
    CalendarComponent,
    IconsPageComponent,
    ServiceOneComponent,
    ServiceTwoComponent
  ],
  exports: [IconsPageComponent, ServiceOneComponent, ServiceTwoComponent]
})
export class ComunicationModule {}
