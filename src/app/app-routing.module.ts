import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: '**', redirectTo: 'contact' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
