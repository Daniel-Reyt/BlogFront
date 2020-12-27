import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  theme = "Paysage";

  listPost = [
    {
      author: 'me',
      theme: 'paysage',
      description: 'lac de montagne'
    },
    {
      author: 'me',
      theme: 'paysage',
      description: 'lac de campagne'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
