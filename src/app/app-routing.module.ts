import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { ParagraphComponent } from './views/paragraph/paragraph.component';
import { SecondComponent } from './views/second/second.component';


const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'paragraph', component: ParagraphComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'second', component: SecondComponent },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
