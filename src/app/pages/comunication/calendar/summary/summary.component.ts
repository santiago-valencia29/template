import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Inject, OnInit, Optional } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class SummaryComponent implements OnInit {
  dataSource = ELEMENT_DATA
  columnsToDisplay = [
    'Proyecto',
    'HR',
    'HP',
    'DF',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
  ]
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand']
  expandedElement: Sumamary | null

  constructor(
    public dialogRef: MatDialogRef<SummaryComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
export interface Sumamary {
  Proyecto: string
  HR: number
  HP: number
  DF: number
  actividades: {}[]
  lunes: number
  martes: number
  miercoles: number
  jueves: number
  viernes: number
  sabado: number
  domingo: number
}

const ELEMENT_DATA: Sumamary[] = [
  {
    Proyecto: '0010162 - ELECTROMEC TUNEL LA LINEA',
    HR: 20.0,
    HP: 82.0,
    DF: 62.0,
    actividades: [
      {
        id: 1,
        actividad: '001016204110 - COORDINACION',
        hr: 10,
        hp: 18,
        df: 8,
        lunes: 8,
        martes: 10,
        miercoles: 12,
        jueves: 14,
        viernes: 10,
        sabado: 9,
        domingo: 8
      },
      {
        id: 2,
        actividad: '0010162204120 - ELECTRICA E ITS',
        hr: 10,
        hp: 12,
        df: 2,
        lunes: 8,
        martes: 10,
        miercoles: 12,
        jueves: 14,
        viernes: 10,
        sabado: 9,
        domingo: 8
      }
    ],
    lunes: 8,
    martes: 10,
    miercoles: 12,
    jueves: 14,
    viernes: 10,
    sabado: 9,
    domingo: 8
  }
]
