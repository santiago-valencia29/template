import { Injectable } from '@angular/core'
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SwalAlertService {
  variables = {
    backgroundStyle: 'linear-gradient( 135deg, #1A237E 4%, #1d2344 90%)',
    backgroundStyleError: 'linear-gradient( 135deg, #1A237E 4%, #461e1e 90%)',
    confirmButtonColorStyle: '#1A237E',
    deleteButtonColorStyle: '#1d2344',
    confirmButtonColorStyleError: '#8B0000'
  }

  constructor() {}

  swalAlertClose() {
    Swal.close()
  }

  loading(message: string, icon: any) {
    Swal.fire({
      showConfirmButton: false,
      allowOutsideClick: false,
      icon: icon,
      html: `<h3 style="color:#000000">${message}</h3>`
    })
    Swal.showLoading()
  }

  alertTopEnd(message: string, icon: any, timer: number) {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: message,
      showConfirmButton: false,
      timer: timer
    })
  }
}
