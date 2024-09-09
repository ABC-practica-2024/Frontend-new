import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EchipaComponent} from "./echipa/echipa.component";

const routes: Routes = [
    {path: 'echipa', component: EchipaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
