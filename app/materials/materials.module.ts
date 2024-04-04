import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule} from '@angular/material/table';

const materialModules =[
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports : [
    materialModules
  ],
  exports : [
    materialModules
  ]
})
export class MaterialsModule { }
