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
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { FormsModule } from '@angular/forms'
import { FlatpickrModule } from 'angularx-flatpickr'
import { ModalModule } from 'ngx-bootstrap/modal'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    SharedModule,
    ComunicationRoutingModule,
    HeaderModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ModalModule.forRoot(),
    FlatpickrModule.forRoot()
  ],
  declarations: [
    CalendarComponent,
    IconsPageComponent,
    ServiceOneComponent,
    ServiceTwoComponent
  ],
  exports: [
    CalendarComponent,
    IconsPageComponent,
    ServiceOneComponent,
    ServiceTwoComponent
  ]
})
export class ComunicationModule {}
