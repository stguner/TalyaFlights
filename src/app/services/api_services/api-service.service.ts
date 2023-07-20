import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:32768/api/HttpClient';

  constructor(private http: HttpClient) { }

  getAllCities(keyword: string, limit: number) {
    const url = `${this.baseUrl}/GetAllCities?keyword=${keyword}&limit=${limit}`;
    return this.http.get(url);
  }
}
