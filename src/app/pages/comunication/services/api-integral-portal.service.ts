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

  getInfoWithToken(): Observable<any> {
    let authorization =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcGxpY2FjaW9uZXMwQGludGVncmFsLmNvbS5jbyIsImp0aSI6IjZlOTRlZTA3LWU4MzgtNDExOS1hZTQ0LTFmZTFlNjc2ZTQ2NyIsImV4cCI6MTY1NjMzOTU0MiwiaXNzIjoibG9jYWxob3N0IiwiYXVkIjoidXNlcnMifQ.R7Or11ySrnjTJuLri1wpOX5-odcuqQYqdiw8azS7hSs'
    // let body = {
    //   appId: '1yWk19ybZwAfzoxUoUQSqg',
    //   document: 'string',
    //   id: 'string',
    //   email: 'jicanas@integral.com.co',
    //   rolName: 'string'
    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Autorization: authorization
      })
    }

    return this._http.get(
      'https://apilogin.appsintegral.net:14443/api/Account/GetAllUsers',
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
      'https://apilogin.appsintegral.net:14443/api/Account/CreateToken',
      body,
      { headers: httpOptions.headers }
    )
  }
}
