import { Component, OnInit } from '@angular/core'
import { routes } from 'src/app/consts'
import { ApiIntegralPortalService } from '../services/api-integral-portal.service'

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.scss']
})
export class ServiceTwoComponent implements OnInit {
  public routes: typeof routes = routes

  constructor(private _jerarquiaService: ApiIntegralPortalService) {}

  ngOnInit() {}

  getInfoWithToken() {
    this._jerarquiaService.getProjects().subscribe((x) => {
      console.log(x)
    })
  }
}
