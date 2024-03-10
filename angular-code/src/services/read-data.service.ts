import { Injectable } from '@angular/core';
import { TableData } from '../model/table-data.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  //Observable is used in order to get the data published on localhost\taxables
  getTableData(): Observable<TableData[]> {
    return this.http.get<TableData[]>(`${this.url}taxables`).pipe(map(response=>response));
  }
}
