import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { questions } from '../data-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http:HttpClient) { }

  private apiUrl = "http://localhost:3000/questions";

  getQuestions(): Observable<any> {
    return this.http.get<questions>(this.apiUrl);
  }
}
