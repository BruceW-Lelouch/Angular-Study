import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComReciverComponent } from './com-reciver/com-reciver.component';
import { ComSenderComponent } from './com-sender/com-sender.component';

const routes: Routes = [
	{ path: 'reciver', component: ComReciverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
