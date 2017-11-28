import { Component } from '@angular/core';
import {HttpServiceService} from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpServiceService]
})
export class AppComponent {
  title = 'app';
  posts:any;

  constructor(private httpService:HttpServiceService) {
  	this.httpService.hitJsonApi().subscribe(res => {
  		//console.log(res);
  	})	
  	this.posts = this.httpService.hitJsonApi();
  	console.log(this.posts)
  }
}
