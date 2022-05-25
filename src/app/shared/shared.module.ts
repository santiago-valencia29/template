import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../app-material.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HeaderModule } from './header/header.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    HeaderModule
  ],
  exports: [],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class SharedModule {}
