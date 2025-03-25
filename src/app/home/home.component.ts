import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  readonly basePhotosURL = 'https://angular.dev/assets/images/tutorials/common';
  
  housingLocation : HousingLocation  = {
    id: 9999,
    name: 'Test Home',
    type: 'Test type',
    city: 'Test city',
    state: 'ST',
    photo: `${this.basePhotosURL}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
