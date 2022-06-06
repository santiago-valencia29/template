import { Component, OnInit } from '@angular/core'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  error() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }

  warning() {
    Swal.fire({
      customClass: {
        popup: 'large-sa-popup'
      },
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
      }
    })
  }

  positionTop() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  success() {
    Swal.fire({
      position: 'bottom-left',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  info() {
    Swal.fire({
      position: 'top-end',
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      target: '#myDiv',
      showCancelButton: true,
      focusConfirm: false
    })
  }

  toast() {
    Swal.fire({
      text: 'Toast with custom target',
      icon: 'info',
      toast: true,
      position: 'top-end',
      showCloseButton: true,
      showConfirmButton: false,
      timer: 5000
    })
  }

  toastTargetTopEnd() {
    Swal.fire({
      text: 'Toast with custom target',
      target: '#custom-target1',
      icon: 'error',
      customClass: {
        container: 'position-absolute'
      },
      toast: true,
      position: 'top-end',
      showCloseButton: true,
      showConfirmButton: false
    })
  }

  toastTargetBottomLeft() {
    Swal.fire({
      text: 'Toast with custom target',
      target: '#custom-target2',
      icon: 'error',
      customClass: {
        container: 'position-absolute'
      },
      toast: true,
      position: 'bottom-left',
      showCloseButton: true,
      showConfirmButton: false
    })
  }
}
