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

  getDataFirebase(): Observable<any> {
    return this._http.get('https://angular8-35cb3.firebaseio.com/heroes.json', {
      headers: this.headers
    })
  }

  getInfoWithToken() {
    let authorization =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYXNobyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE1MjQwODcyMzJ9.MUv5RgI9LxQyrrCfjfX8HR2-XiQmz4vjLqH7V_0Du7VFLC0WrK_y3FfeNoT2Nj_uguIK2ss7jv-LNiHuCGtz4A'
    let body = {
      appId: '1yWk19ybZwAfzoxUoUQSqg',
      document: 'string',
      id: 'string',
      email: 'jicanas@integral.com.co',
      rolName: 'string'
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Autorization: authorization
      })
    }

    return this._http.post(
      'http://apilogintest.appsintegral.net:14443/api/Account/GetInfoUserByEmail',
      body,
      { headers: httpOptions.headers }
    )
  }
}
