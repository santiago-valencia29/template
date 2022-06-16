import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog'
import { ReopeningComponent } from '../reopening/reopening.component'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  date = new FormControl(new Date())
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openPopUpReopening() {
    const dialogRef = this.dialog.open(ReopeningComponent, {
      // width: '1000px'
      // data: modalData
      // backdropClass: 'backdropBackground'
    })
  }
}
