import { Component, Input, OnInit } from '@angular/core'
import { Customer } from '../../models'

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  @Input() materialTableDate: any
  public displayedColumns: string[] = [
    'name',
    'email',
    'product',
    'price',
    'date',
    'city',
    'status'
  ]
  public dataSource!: Customer[]

  constructor() {}

  ngOnInit() {
    this.dataSource = this.materialTableDate
  }
}
