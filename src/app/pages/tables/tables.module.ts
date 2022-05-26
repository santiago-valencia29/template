import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TablesRoutingModule } from './tables-routing.module'
import { AngularMaterialModule } from 'src/app/app-material.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { TablesPageComponent } from './containers'
import { EmployeeTableComponent, MaterialTableComponent } from './components'

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  declarations: [
    TablesPageComponent,
    MaterialTableComponent,
    EmployeeTableComponent
  ],
  exports: [TablesPageComponent, MaterialTableComponent, EmployeeTableComponent]
})
export class TablesModule {}
