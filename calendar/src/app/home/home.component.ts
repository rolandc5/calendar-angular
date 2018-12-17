import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Data } from '../Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes = [
    { name: "Cereal",
      image: "../../assets/images/cereal.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["breakfast",],
      cooktime: "1",
      ingredients: ["Cereal", "Milk", "strawberry", "nuts", "raisins", "berry"],
      creater: "Roland Canuto",
      likes: 1000,
    },
    { name: "Hot Dog",
      image: "../../assets/images/cereal.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      tags: ["Lunch"],
      cooktime: "1",
      ingredients: ["Bun", "Hotdog"],
      creater: "Mary Pena",
      likes: 5000,
    }
  ]
  constructor(private userData: UserdataService ) { }

  ngOnInit() {
  }
}

/*
<div class="h-ingredientsContainer">
                <ul *ngFor="let ingredients of recipe.ingredients">
                  <li class="h-ingredientName">
                    {{ ingredients }}
                  </li>
                </ul>
              </div>
*/