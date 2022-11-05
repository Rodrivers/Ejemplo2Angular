import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UtlService } from './Services/utl.service';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers:[
    UtlService
  ]
})
export class UtlModule { }
