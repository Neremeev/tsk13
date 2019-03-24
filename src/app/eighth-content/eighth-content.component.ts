import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from '../api.service';

@Component({
  selector: 'app-eighth-content',
  templateUrl: './eighth-content.component.html',
  styleUrls: ['./eighth-content.component.scss']
})
export class EighthContentComponent implements OnInit {

  errorMessage = false;
  success = false;

  messageForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userQuestion: new FormControl('', Validators.required),
  });

  openModal = false;

  constructor(private serviceApi: ApiService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.errorMessage = true;

    const obj = {
      name: this.messageForm.value.userName,
      email: this.messageForm.value.userEmail,
      message: this.messageForm.value.userQuestion
    };
    if (this.messageForm.valid) {
      this.serviceApi.postMessage(obj).subscribe(data => {
        this.errorMessage = false;
        this.success = true;
      });
    }
  }

  openPopup() {
    this.openModal = true;
    setTimeout((() => this.openModal = false), 500);
  }

}
