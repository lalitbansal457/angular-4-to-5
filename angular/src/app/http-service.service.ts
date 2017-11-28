import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpServiceService {

  constructor(private http:HttpClient) { 

  }

  hitJsonApi() {
  	return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res =>{
  		console.log(res);
  		return res;
  	}))
  }
}
