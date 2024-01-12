import { Component } from '@angular/core'
import { Meal } from './meal'

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent {
  meals: Meal[] = [
    new Meal('../../../assets/images/meals/Rectangle 228.png', 'بامية ورز'),
    new Meal('../../../assets/images/meals/Rectangle 229.png', 'شيش طاووق'),
    new Meal('../../../assets/images/meals/Rectangle 231.png', 'كوردون بلو'),
    new Meal('../../../assets/images/meals/Rectangle 232.png', 'رز بفول'),
  ]
}
