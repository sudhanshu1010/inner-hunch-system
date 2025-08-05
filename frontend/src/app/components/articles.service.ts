import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // globally available
})
export class ArticlesService {
  private jsonPath = 'assets/articles.json';  // path to your file

  constructor(private http: HttpClient) {}

  // Fetch all articles
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonPath);
  }
}
