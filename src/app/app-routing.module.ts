import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

const approutes: Routes = [
  {path : 'home', component : AppComponent },
  {path : 'add' , component : AddComponent},
  {path : 'table' , component : TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
