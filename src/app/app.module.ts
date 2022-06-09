import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PopupModule } from './pages/popup/popup.module'
import { SharedModule } from './shared/shared.module'
import { NotificationModule } from './pages/notification/notification.module'
import { TablesModule } from './pages/tables/tables.module'
import { TypographyModule } from './pages/typography/typography.module'
import { ComunicationModule } from './pages/comunication/comunication.module'
import { HttpClientModule } from '@angular/common/http'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    PopupModule,
    NotificationModule,
    TablesModule,
    TypographyModule,
    ComunicationModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
