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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlatpickrModule } from 'angularx-flatpickr'
import { ModalModule } from 'ngx-bootstrap/modal'
import { registerLocaleData } from '@angular/common'
import localeCO from '@angular/common/locales/es-CO'
import { FilterComponent } from './calendar/filter/filter.component'
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { RecordTimeComponent } from './calendar/record-time/record-time.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SummaryComponent } from './calendar/summary/summary.component'

registerLocaleData(localeCO)

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    ComunicationRoutingModule,
    HeaderModule,
    FlexLayoutModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ModalModule.forRoot(),
    FlatpickrModule.forRoot()
  ],
  declarations: [
    SummaryComponent,
    RecordTimeComponent,
    FilterComponent,
    CalendarComponent,
    IconsPageComponent,
    ServiceOneComponent,
    ServiceTwoComponent
  ],
  exports: [
    SummaryComponent,
    RecordTimeComponent,
    FilterComponent,
    CalendarComponent,
    IconsPageComponent,
    ServiceOneComponent,
    ServiceTwoComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-CO' }]
})
export class ComunicationModule {}
