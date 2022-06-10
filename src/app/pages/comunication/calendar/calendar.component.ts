import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core'
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns'
import { Subject } from 'rxjs'
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal'
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarView
} from 'angular-calendar'
import { CustomEventTitleFormatter } from './utils/custom-event-title-formatter.provider'
const colors: any = {
  evento: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  eventoSecundary: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  hOrdinarias: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  hExtrasDiurnas: {
    primary: '#1e90ff',
    secondary: '#FFF85F'
  },
  hOrdinariasNocturnas: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  hExtrasNocturnas: {
    primary: '#0000000',
    secondary: '#4D6CA0 ',
    terciary: '#ffffff'
  }
}

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatter
    }
  ]
})
export class CalendarComponent implements OnInit {
  locale: string = 'es-CO'
  weekStartsOn: number = 1
  view: CalendarView = CalendarView.Week
  CalendarView = CalendarView
  viewDate: Date = new Date()

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>
  modalData!: {
    action: string
    event: CalendarEvent
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event)
      }
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event)
        this.handleEvent('Deleted', event)
      }
    }
  ]

  refresh = new Subject<void>()

  events: CalendarEvent[] = [
    {
      start: new Date('2022-06-06T02:24'),
      end: new Date('2022-06-06T02:24'),
      title: 'Evento Integral',
      color: colors.evento,
      actions: this.actions,
      allDay: true,
      meta: {
        project: '',
        activity: '',
        hours: '',
        hourType: '',
        description: ''
      }
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Evento largo que se extiende por 2 meses',
      color: colors.hOrdinarias,
      allDay: true
    },
    {
      id: 1,
      start: new Date('2022-06-10T07:00'),
      end: new Date('2022-06-10T10:00'),
      title: 'ELECTROMEC TUNEL LA LINEA',
      color: colors.hOrdinarias,
      actions: this.actions,
      cssClass: 'hExtrasDiurnas',
      meta: {
        project: 'ELECTROMEC TUNEL LA LINEA',
        activity: 'Coordinación',
        hours: this.getDifferenceHours(
          new Date('2022-06-10T07:00'),
          new Date('2022-06-10T10:00')
        ),
        hourType: 'Horas Ordinarias',
        description: ''
      }
    },
    {
      id: 2,
      start: new Date('2022-06-10T10:00'),
      end: new Date('2022-06-10T12:30'),
      title: 'ELECTROMEC TUNEL LA LINEA',
      color: colors.hOrdinarias,
      cssClass: 'hExtrasDiurnas',
      actions: this.actions,
      meta: {
        project: 'ELECTROMEC TUNEL LA LINEA',
        activity: 'Electrica e Its',
        hours: this.getDifferenceHours(
          new Date('2022-06-10T10:00'),
          new Date('2022-06-10T12:30')
        ),
        hourType: 'Horas Ordinarias',
        description: ''
      }
    },
    {
      id: 3,
      start: new Date('2022-06-10T14:00'),
      end: new Date('2022-06-10T19:00'),
      title: 'METRO CABLE',
      color: colors.hExtrasDiurnas,
      cssClass: 'hExtrasDiurnas',
      actions: this.actions,
      meta: {
        project: 'METRO CABLE',
        activity: 'Diseño',
        hours: this.getDifferenceHours(
          new Date('2022-06-10T14:00'),
          new Date('2022-06-10T19:00')
        ),
        hourType: 'Horas Ordinarias',
        description: ''
      }
    },
    {
      id: 4,
      start: new Date('2022-06-10T20:00'),
      end: new Date('2022-06-10T24:00'),
      title: 'HIDROLECTRICA',
      color: colors.hExtrasNocturnas,
      cssClass: 'hExtrasNocturnas',
      actions: this.actions,
      meta: {
        project: 'HIDROLECTRICA',
        activity: 'Informe',
        hours: this.getDifferenceHours(
          new Date('2022-06-10T20:00'),
          new Date('2022-06-10T24:00')
        ),
        hourType: 'Horas Extras Nocturnas',
        description: ''
      }
    }
  ]

  activeDayIsOpen: boolean = true

  constructor(private modalService: BsModalService) {}
  ngOnInit() {
    console.log(this.events[2].start)
  }

  getDifferenceHours(start: Date, end: Date): string {
    let difference = Math.abs(start.getTime() - end.getTime())
    let totalHours = difference / (60 * 60 * 1000)
    return totalHours.toString() + ' Horas'
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false
      } else {
        this.activeDayIsOpen = true
      }
      this.viewDate = date
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        }
      }
      return iEvent
    })
    this.handleEvent('Dropped or resized', event)
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action }
    console.log(this.modalData)
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ]
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete)
  }

  setView(view: CalendarView) {
    this.view = view
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false
    console.log('total-Horas')
  }
}
