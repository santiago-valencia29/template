import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopupPageComponent } from './containers/popup-page/popup-page.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { PopupPageActionComponent } from './components'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HeaderModule } from 'src/app/shared/header/header.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PopupPageComponent, PopupPageActionComponent],
  declarations: [PopupPageComponent, PopupPageActionComponent]
})
export class PopupModule {}
