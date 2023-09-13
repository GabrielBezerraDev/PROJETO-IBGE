import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports:[
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class SharedAngularMaterialModule { }
