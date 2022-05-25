import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-popup-page-action',
  templateUrl: './popup-page-action.component.html',
  styleUrls: ['./popup-page-action.component.scss']
})
export class PopupPageActionComponent implements OnInit {
  showActionButton!: boolean

  constructor(
    public dialogRef: MatDialogRef<PopupPageActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [any, boolean]
  ) {
    this.showActionButton = data[1]
  }

  ngOnInit() {}

  onClose(): void {
    this.dialogRef.close(false)
  }
}
