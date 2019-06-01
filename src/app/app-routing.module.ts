import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
{
  path: '', redirectTo: '/characters', pathMatch: 'full'
},
{
  path: 'characters', component: MoviesComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
