import { Component, OnInit } from '@angular/core'
import { routes } from 'src/app/consts'
import { ApiIntegralPortalService } from '../services/api-integral-portal.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.scss']
})
export class ServiceOneComponent implements OnInit {
  public routes: typeof routes = routes

  heroes: any[] = []

  constructor(private _jerarquiaService: ApiIntegralPortalService) {}

  ngOnInit() {
    this.getLeader()
    // this.getFirebase()
  }

  getLeader() {
    this._jerarquiaService.getLeader().subscribe((x) => {
      console.log(x)
    })
  }

  getFirebase() {
    Swal.fire({
      showConfirmButton: false,
      allowOutsideClick: false,
      icon: 'info',
      html: '<h3 style="color:#000000">Espere por favor...</h3>'
    })
    Swal.showLoading()
    setTimeout(() => {
      this._jerarquiaService.getDataFirebase().subscribe((x) => {
        this.heroes = Object.keys(x).map((key) => x[key])
        console.log(this.heroes)
        Swal.close()
      })
    }, 2500)
  }
}
