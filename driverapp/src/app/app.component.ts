import { Component } from '@angular/core';
import {DRIVERS} from "./mock-drivers";
import { Driver } from './driver';
import {DriverService} from "./driver.service";

@Component({
  selector: 'driver-app',
  templateUrl: './driver.view.html',
  styleUrls: ['./driver.css']
})

export class AppComponent {
  title = 'Drivers';
  drivers: Driver[];
  selectedDriver: Driver;
  errorMessage: string;

  getDrivers(): void {
    this.driverService.getDrivers().then(
      responseData => {
        console.log('get drivers');
        this.drivers = responseData;
      },
      error => {
        console.log('logout failure');
        this.errorMessage = error;
      }
    );
  }

  constructor(private driverService:DriverService) {
    this.getDrivers();
  }

  onSelect(driver:Driver){
    this.selectedDriver = driver;
  }
}
