import { Component} from '@angular/core';
import { AppService } from './app.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'app works!';
   color = {};
  constructor(private appService: AppService) {
    this.appService.getUser().subscribe(data => this.color = data);
     console.log("LLLLLLLLLL",this.color)
   }
  }


//  loadUser() {
//
// }
