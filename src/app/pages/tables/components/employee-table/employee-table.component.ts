import { SelectionModel } from '@angular/cdk/collections'
import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Employee } from '../../models'

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  @Input() employeeTableData!: any
  public displayedColumns: string[] = [
    'select',
    'name',
    'company',
    'city',
    'state'
  ]
  public dataSource!: MatTableDataSource<Employee>
  public selection = new SelectionModel<Employee>(true, [])

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData)

    this.dataSource.paginator = this.paginator
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row))
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`
  }
}
