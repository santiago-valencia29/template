import { Component, Inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-record-time',
  templateUrl: './record-time.component.html',
  styleUrls: ['./record-time.component.scss']
})
export class RecordTimeComponent implements OnInit {
  date = new FormControl(new Date())

  constructor(
    public dialogRef: MatDialogRef<RecordTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data)
  }

  onSave(): void {
    this.dialogRef.close(true)
  }

  onClose(): void {
    this.dialogRef.close(false)
  }
}
