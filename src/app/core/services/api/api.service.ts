import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class ApiService {

  constructor(protected http: HttpClient) { }

  protected apiUrl = 'http://localhost:8000';
}
