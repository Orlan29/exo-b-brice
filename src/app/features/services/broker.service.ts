import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class BrokerService {
  private _brokers$ = new BehaviorSubject<[]>([]);
  get brokers$(): Observable<[]> {
    return this._brokers$.asObservable();
  }

  constructor(private http: HttpClient) {}

  getBrokers(): Observable<[]> {
    return this.http.get<[]>(`${environment.apiUrl}/brokers`);
  }
}
