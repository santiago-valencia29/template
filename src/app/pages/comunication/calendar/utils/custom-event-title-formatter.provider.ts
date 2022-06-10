import { LOCALE_ID, Inject, Injectable } from '@angular/core'
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar'
import { formatDate } from '@angular/common'

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super()
  }

  // you can override any of the methods defined in the parent class

  override week(event: CalendarEvent): string {
    return `</b> ${event.title}</br>${event.meta?.activity}</br>${event.meta?.hours}`
  }

  override weekTooltip(event: CalendarEvent): string {
    return `</b> ${event.title}</br>${event.meta?.activity}</br>${event.meta?.hours}`
  }
}
