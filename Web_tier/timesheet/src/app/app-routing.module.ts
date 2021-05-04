import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './themes/users/users.component';



const routes: Routes = [
  {
    path: "",
    component: ThemesComponent,
    children: [
      {
        path: "theme",
        loadChildren: () => import('./themes/themes.module').then(m => m.ThemesModule)
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
