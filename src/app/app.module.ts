import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SecretSantaComponent } from './secret-santa/secret-santa.component';
import { CalendarCardComponent } from './calendar/calendar-card/calendar-card.component';
import { CalendarModalComponent } from './calendar/calendar-modal/calendar-modal.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    SecretSantaComponent,
    CalendarCardComponent,
    CalendarModalComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
