import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { AngularMaterialModule } from '../app-material.module'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { HeaderModule } from './header/header.module'
import { LayoutComponent } from './layout/layout.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
    HeaderModule
  ],
  exports: [LayoutComponent, SidebarComponent, FooterComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class SharedModule {}
