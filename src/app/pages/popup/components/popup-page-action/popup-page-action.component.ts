import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-popup-page-action',
  templateUrl: './popup-page-action.component.html',
  styleUrls: ['./popup-page-action.component.scss']
})
export class PopupPageActionComponent implements OnInit {
  showActionButton!: boolean
  toppings: FormGroup

  constructor(
    public dialogRef: MatDialogRef<PopupPageActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [any, boolean],
    fb: FormBuilder
  ) {
    this.showActionButton = data[1]
    this.toppings = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
    })
  }

  ngOnInit() {}

  onClose(): void {
    this.dialogRef.close(false)
  }
}
