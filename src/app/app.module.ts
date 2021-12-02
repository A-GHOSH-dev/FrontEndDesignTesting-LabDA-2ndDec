import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CareComponent } from './care/care.component';
import { ContactComponent } from './contact/contact.component';
import { FactComponent } from './fact/fact.component';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareComponent,
    ContactComponent,
    FactComponent,
    FoodComponent,
    HomeComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
