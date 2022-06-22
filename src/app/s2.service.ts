import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class S2Service {
  constructor(private http: HttpClient) {}
  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    console.log('S2');
    return this.http.get(url, { observe: 'body' });
  }
}
