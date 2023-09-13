import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacroRegiaoComponent } from './macro-regiao/macro-regiao.component';

const routes: Routes = [
  {
    path: '',
    component: MacroRegiaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
