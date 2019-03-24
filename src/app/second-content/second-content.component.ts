import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.scss']
})
export class SecondContentComponent implements OnInit {

  constructor(private serviceApi: ApiService) { }

  currentServiceId;
  data: any;
  openModal = false;

  ngOnInit() {
    this.serviceApi.getAllServices().subscribe(data => {
      this.data = data;
    });
  }

  openPopup(item) {
    this.currentServiceId = item.id;
    this.openModal = true;
    setTimeout((() => this.openModal = false), 500);
  }

}
