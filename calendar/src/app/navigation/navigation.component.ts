import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAccountClick() {
    localStorage.getItem("id") ? window.location.href = "/" : window.location.href = "/login";
  }
}