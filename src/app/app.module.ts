import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstContentComponent } from './first-content/first-content.component';
import { SecondContentComponent } from './second-content/second-content.component';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalFormComponent} from "./modal/modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ThirdContentComponent } from './third-content/third-content.component';
import { FourthContentComponent } from './fourth-content/fourth-content.component';
import { FifthContentComponent } from './fifth-content/fifth-content.component';
import { SixthContentComponent } from './sixth-content/sixth-content.component';
import { SeventhContentComponent } from './seventh-content/seventh-content.component';
import { EighthContentComponent } from './eighth-content/eighth-content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstContentComponent,
    SecondContentComponent,
    ModalFormComponent,
    ThirdContentComponent,
    FourthContentComponent,
    FifthContentComponent,
    SixthContentComponent,
    SeventhContentComponent,
    EighthContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
