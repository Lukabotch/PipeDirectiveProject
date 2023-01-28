import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TimeAgoPipe } from 'time-ago-pipe/time-ago.pipe';
import { ColorsComponent } from './colors/colors.component';
import { AgeDistancePipe } from './pipes/age-distance.pipe';

@NgModule({
  declarations: [AppComponent, UsersComponent, ColorsComponent, AgeDistancePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
