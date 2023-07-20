import { Component } from '@angular/core';
import { ApiService } from '../services/api_services/api-service.service';

@Component({
  selector: 'app-api-deneme',
  templateUrl: './api-deneme.component.html',
})
export class ApiDenemeComponent {
  constructor(private apiService: ApiService) { }

  searchCities() {
    const keyword = 'A';
    const limit = 20;
    
    this.apiService.getAllCities(keyword, limit).subscribe(
      (data) => {
        console.log('API response:', data);
        // Handle the response data here
      },
      (error) => {
        console.error('API error:', error);
        // Handle the error here
      }
    );
  }
}

