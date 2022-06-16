import { Component, Inject, OnInit, Optional } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-reopening',
  templateUrl: './reopening.component.html',
  styleUrls: ['./reopening.component.scss']
})
export class ReopeningComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReopeningComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onSave(): void {
    this.dialogRef.close(true)
  }

  onClose(): void {
    this.dialogRef.close(false)
  }
}
