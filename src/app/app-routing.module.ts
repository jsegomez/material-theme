import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { FormsComponent } from './pages/forms/forms.component';
import { LayoutFlexComponent } from './pages/layout-flex/layout-flex.component';

const routes: Routes = [
  { path: 'buttons',  component: ButtonsComponent },
  { path: 'forms',    component: FormsComponent   },
  { path: 'layout',   component: LayoutFlexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
