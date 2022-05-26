import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Customer, Employee } from '../../models'
import { TablesService } from '../../services'

@Component({
  selector: 'app-tables-page',
  templateUrl: './tables-page.component.html',
  styleUrls: ['./tables-page.component.scss']
})
export class TablesPageComponent implements OnInit {
  public employeeTableData$!: Observable<Employee[]>
  public materialTableData$!: Observable<Customer[]>

  constructor(private service: TablesService) {}

  ngOnInit() {
    this.employeeTableData$ = this.service.loadEmployeeTableData()
    this.materialTableData$ = this.service.loadMaterialTableData()
  }
}
