import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TypographyPageComponent } from './containers/typography-page/typography-page.component'
import { TypographyRoutingModule } from './typography-routing.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    TypographyRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  declarations: [TypographyPageComponent]
})
export class TypographyModule {}
