import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './body/header/header.component'
import { MainPictureComponent } from './home/main-picture/main-picture.component'
import { MealsComponent } from './home/meals/meals.component'
import { MealContainerComponent } from './home/meals/meal-container/meal-container.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainPictureComponent,
    MealsComponent,
    MealContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
