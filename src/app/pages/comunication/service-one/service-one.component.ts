import { Component, OnInit } from '@angular/core'
import { routes } from 'src/app/consts'
import { ApiIntegralPortalService } from '../services/api-integral-portal.service'
import { SwalAlertService } from 'src/app/shared/swal-alert/swal-alert.service'

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent implements OnInit {
  public routes: typeof routes = routes

  heroes: any[] = []

  constructor(
    private _jerarquiaService: ApiIntegralPortalService,
    private _swalAlert: SwalAlertService
  ) {}

  ngOnInit() {}

  getFirebase() {
    this._swalAlert.loading('Espere por favor...', 'info')
    setTimeout(() => {
      this._jerarquiaService.getDataFirebase().subscribe((x) => {
        this.heroes = Object.keys(x).map((key) => x[key])
        console.log(this.heroes)
        this._swalAlert.swalAlertClose()
      })
    }, 2500)
  }
}
