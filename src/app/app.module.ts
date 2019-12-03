import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {ToastModule} from './toast/toast.module';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AppRoutes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ToastModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
