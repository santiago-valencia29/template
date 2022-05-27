import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiIntegralPortalService {
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private _http: HttpClient) {}

  // getProjects(): Observable<any> {
  //   return this._http.get(
  //     environment.urlJerarquia + '?DocumentCollaborator=1026258831',
  //     { headers: this.headers }
  //   )
  // }

  getProjects(): Observable<any> {
    return this._http.get(
      'https://apijerarquiaempleados.appsintegral.net:30443/api/HierarchyEmployee/Collaborator?DocumentCollaborator=1026258831',
      { headers: this.headers }
    )
  }
}
