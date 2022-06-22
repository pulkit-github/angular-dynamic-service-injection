import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class S1Service {
  constructor(private http: HttpClient) {}
  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    console.log('S1');
    return this.http.get(url, { observe: 'body' });
  }
}
