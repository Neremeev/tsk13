import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-content',
  templateUrl: './fifth-content.component.html',
  styleUrls: ['./fifth-content.component.scss']
})
export class FifthContentComponent implements OnInit {

  openModal = false;

  data = [
    {
      image: '../../assets/icon-phone.png',
      head: 'Обращение',
      text: 'Позвоните нам по телефону  +7(987) 998-80-13  +7(987) 998-80-13 закажите  бесплатный звонок  или оставьте заявку на сайте.'
    },
    {
      image: '../../assets/icon-home.png',
      head: 'Выезд мастера',
      text: 'Мастер приедет к Вам в день подачи заявки или на следующий день. Определит объём работ и рассчитает точную стоимость.'
    },
    {
      image: '../../assets/icon-fast.png',
      head: 'Выполнение работ',
      text: 'Позвоните нам по телефону  +7(987) 998-80-13  +7(987) 998-80-13 закажите  бесплатный звонок  или оставьте заявку на сайте.'
    },
    {
      image: '../../assets/icon-bus2.png',
      head: 'Результат',
      text: 'В результате, Вы получите полностью исправное и готовое к работе газовое оборудование. А также, гарантию качества от нашей компании.'
    },
    {
      image: '../../assets/icon-money.png',
      head: 'Расчёт по факту',
      text: 'Все расчёты производятся по факту выполнения работ. Оплата возможна как наличными средствами, так и безналичным платежом.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  openPopup() {
    this.openModal = true;
    setTimeout((() => this.openModal = false), 500);
  }

}
