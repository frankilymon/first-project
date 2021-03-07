import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  template: '<p>This is a warning!</p>',
  styles: [
    `p {
        padding: 20px;
        background-color: skyblue;
        border: 5px solid red;
    }
  `
  ]
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
