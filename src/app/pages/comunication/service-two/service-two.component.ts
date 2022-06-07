import { SelectionModel } from '@angular/cdk/collections'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { routes } from 'src/app/consts'
import { LocalService } from 'src/app/shared/services'
import { SwalAlertService } from 'src/app/shared/services/swal-alert.service'
import { ApiIntegralPortalService } from '../services/api-integral-portal.service'

export interface User {
  document: string
  fullname: number
  email: number
}

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.scss']
})
export class ServiceTwoComponent implements OnInit {
  public routes: typeof routes = routes
  token = ''
  showButtonRunService = false
  showPagination = false
  users: User[] = []
  public displayedColumns: string[] = [
    'select',
    'document',
    'fullName',
    'email'
  ]

  public dataSource!: MatTableDataSource<User>
  public selection = new SelectionModel<User>(true, [])

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator

  constructor(
    private _jerarquiaService: ApiIntegralPortalService,
    private _swalAlert: SwalAlertService,
    private _localService: LocalService
  ) {}

  ngOnInit() {}

  generateToken() {
    this._swalAlert.loading('Espere por favor...', 'info')
    this._jerarquiaService.generateToken().subscribe((token) => {
      this._localService.setJsonValue('token', token.result.token)
      //localStorage.setItem('token', this.token)
      console.log(token.result.token)
      this._swalAlert.swalAlertClose()
      this._swalAlert.alertTopEnd('Token Generado', 'success', 2000)
      this.showButtonRunService = true
    })
  }

  getInfoWithToken() {
    this._swalAlert.loading('Espere por favor...', 'info')
    this._jerarquiaService
      .getInfoWithToken(this._localService.getJsonValue('token'))
      .subscribe((x: any) => {
        this.users = x.result
        console.log(x.result)
        this.showPagination = true
        this.dataSource = new MatTableDataSource<User>(this.users)
        this.dataSource.paginator = this.paginator
        this._swalAlert.swalAlertClose()
      })
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
