import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CardObserverService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();
  
  setData(data: any){
    this.dataSubject.next(data);
  }


  private apiUrl = 'http://localhost:8080/cardObserver';  

  constructor(private http: HttpClient) { }


}





