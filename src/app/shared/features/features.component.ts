import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
/**
 * Features component
 */
export class FeaturesComponent implements OnInit {
  displayModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.displayModal = true;
  }
}
