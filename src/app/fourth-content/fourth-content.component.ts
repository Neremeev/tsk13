import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-fourth-content',
  templateUrl: './fourth-content.component.html',
  styleUrls: ['./fourth-content.component.scss']
})
export class FourthContentComponent implements OnInit {

  data: any;

  left = 0;
  @ViewChild('move') slide: ElementRef;

  constructor(private serviceApi: ApiService) { }

  ngOnInit() {
    this.serviceApi.getSertificate().subscribe(data => {
      this.data = data;
    });
  }

  sliderLeft() {
    this.left = this.left - 500;
    if (this.left < 0) {
      this.left = this.data.length * 500 - 500;
    }
    this.slide.nativeElement.style.left = this.left + 'px';
  }

  sliderRight() {
    this.left = this.left + 500;
    if (this.left >= this.data.length * 500) {
      this.left = 0;
    }
    this.slide.nativeElement.style.left = this.left + 'px';
  }

}
