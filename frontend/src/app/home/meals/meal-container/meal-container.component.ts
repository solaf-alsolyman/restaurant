import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-meal-container',
  templateUrl: './meal-container.component.html',
  styleUrls: ['./meal-container.component.scss'],
})
export class MealContainerComponent implements OnInit {
  ngOnInit(): void {}
  @Input() src: string | undefined
  @Input() title: string | undefined
}
