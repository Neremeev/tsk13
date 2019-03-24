import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-sixth-content',
  templateUrl: './sixth-content.component.html',
  styleUrls: ['./sixth-content.component.scss']
})
export class SixthContentComponent implements OnInit {

  data: any;

  left = 0;
  @ViewChild('move') slide: ElementRef;

  constructor(private serviceApi: ApiService) { }

  ngOnInit() {
    this.serviceApi.getWorks().subscribe(data => {
      this.data = data;
    });
  }

  sliderLeft() {
    this.left = this.left - 1000;
    if (this.left < 0) {
      this.left = this.data.length * 1000 - 1000;
    }
    this.slide.nativeElement.style.left = this.left + 'px';
  }

  sliderRight() {
    this.left = this.left + 1000;
    if (this.left >= this.data.length * 1000) {
      this.left = 0;
    }
    this.slide.nativeElement.style.left = this.left + 'px';
  }

}
