import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'home', component : HomeComponent },
  { path: 'studio', component: StudioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'access', component: AccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
