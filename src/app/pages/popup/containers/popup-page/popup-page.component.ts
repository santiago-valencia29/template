import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { PopupPageActionComponent } from '../../components'

@Component({
  selector: 'app-popup-page',
  templateUrl: './popup-page.component.html',
  styleUrls: ['./popup-page.component.scss']
})
export class PopupPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openPopUp(row: any, flagShowButton: boolean) {
    const dialogRef = this.dialog.open(PopupPageActionComponent, {
      width: '600px',
      data: [row, flagShowButton]
      // backdropClass: 'backdropBackground'
    })
  }
}
