import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent implements OnInit {
  displayModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.displayModal = true;
  }
}
