import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openModal = false;

  constructor() { }

  ngOnInit() {
  }

  openPopup() {
    this.openModal = true;
    setTimeout((() => this.openModal = false), 500);
  }

}
