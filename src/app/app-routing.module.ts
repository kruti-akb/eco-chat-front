import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatformComponent } from './chatform/chatform.component';

const routes: Routes = [
  {path:"chatform", component: ChatformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
