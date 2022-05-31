import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiIntegralPortalService {
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private _http: HttpClient) {}

  getLeader(): Observable<any> {
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

  getInfoWithToken(token: string): Observable<any> {
    let authorization = 'Bearer ' + token
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: authorization
      })
    }

    return this._http.get(
      'http://apilogintest.appsintegral.net:14443/api/Account/GetAllUsers',
      { headers: httpOptions.headers }
    )
  }

  generateToken(): Observable<any> {
    let body = {
      userName: 'esvalencia@integral.com.co',
      password: 'Eds954_.vM',
      appId: '1yWk19ybZwAfzoxUoUQSqg'
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    return this._http.post(
      'http://apilogintest.appsintegral.net:14443/api/Account/CreateToken',
      body,
      { headers: httpOptions.headers }
    )
  }
}
