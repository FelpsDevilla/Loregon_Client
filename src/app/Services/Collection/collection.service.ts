import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService extends ApiService{

  private endpoint: string = `${this.apiUrl}/collection`

  constructor(http: HttpClient) {
    super(http)
  }

  public createItem(acervoItemJSON: JSON): Observable<any> {
    return this.http.post(this.endpoint, acervoItemJSON)
  }

  public getAllItens(): Observable<any> {
    return this.http.get(this.endpoint)
  }

  public getItemById(id: number): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`)
  }

  public updateItem(id: number, acervoItemJSON: JSON): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}`, acervoItemJSON)
  }

  public deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`)
  }
}