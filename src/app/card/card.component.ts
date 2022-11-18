import { Component, Input } from '@angular/core';

@Component({
  selector: 'plant-card',
  templateUrl: './card.component.html',
})

export class CardComponent {
  @Input() plantName: string = "Plant";
  @Input() plantCat: string = "cat1";
  @Input() plantIcon: string = "fa-sharp fa-solid fa-leaf";
  @Input() plantSun: string = "20%";
  @Input() plantWet: string = "50%";
  @Input() plantCare: string = "90%";
}
