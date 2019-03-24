import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalFormComponent implements OnInit, AfterViewInit {
  closeResult: string;

  errorMessage = false;
  @Input('buttonText') buttonText: string;
  @Input('typeId') typeId: string;
  @Input('serviceId') serviceId: string;

  messageForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    userPhone: new FormControl('', Validators.required)
  });

  success = false;

  @ViewChild('content') content: ElementRef;

  constructor(private modalService: NgbModal, private serviceApi: ApiService) {}

  ngOnInit() {

  }

  onSubmit() {
    this.errorMessage = true;

    const obj: any = {
      name: this.messageForm.value.userName,
      phone: this.messageForm.value.userPhone,
      type_id: this.typeId
    };

    if (this.serviceId) {
      obj.service_id = this.serviceId;
    }

    if (this.messageForm.valid) {
      this.serviceApi.postRequest(obj).subscribe(data => {
        this.errorMessage = false;
        this.success = true;
      });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.open());
  }

  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
