import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './pages/forms/forms.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TextsComponent } from './pages/texts/texts.component';
import { LayoutFlexComponent } from './pages/layout-flex/layout-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FormsComponent,
    ButtonsComponent,
    TextsComponent,
    LayoutFlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
