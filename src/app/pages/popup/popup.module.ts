import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopupPageComponent } from './containers/popup-page/popup-page.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { PopupPageActionComponent } from './components'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [PopupPageComponent, PopupPageActionComponent],
  declarations: [PopupPageComponent, PopupPageActionComponent]
})
export class PopupModule {}
