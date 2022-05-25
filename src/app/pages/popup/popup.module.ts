import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopupPageComponent } from './containers/popup-page/popup-page.component'
import { SharedModule } from 'src/app/shared/shared.module'
import { AngularMaterialModule } from 'src/app/app-material.module'

@NgModule({
  imports: [CommonModule, SharedModule, AngularMaterialModule],
  declarations: [PopupPageComponent]
})
export class PopupModule {}
