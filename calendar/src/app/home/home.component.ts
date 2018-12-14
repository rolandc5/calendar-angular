import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userData: UserdataService ) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.userData.getTodoList(localStorage.getItem("username"))
      .subscribe(response => {
        console.log(response);
      })
  }

}
