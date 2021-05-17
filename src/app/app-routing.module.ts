import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component'
import { BiographyComponent } from './biography/biography.component'
import { ContactsComponent } from './contacts/contacts.component'
import RouteNames from "../Helpers/RouteNames";

const routes: Routes = [
  { path: RouteNames.Index, component: IndexComponent},
  { path: RouteNames.Biography, component: BiographyComponent},
  { path: RouteNames.Contacts, component: ContactsComponent},
  { path: RouteNames.Root, component: IndexComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
