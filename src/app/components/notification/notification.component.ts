import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {
notifications=[
  {
    title: 'Rick Astle',
    // subtitle: 'Never Gonna Give You Up',
    mss: 'Never gonna give you up Never gonna let you down Never gonna run...',
    time:'06:11'
  },
  {
    title: 'Ofertas para esta navidad',
    subtitle: 'Bueno,bonito y barato',
    mss: 'Never gonna give you up Never gonna let you down Never gonna run...',
    time:'06:11',
    icon:''
  },
  {
    title: 'Tus Audifonos estan por llegar',
    subtitle: 'Bueno,bonito y barato',
    mss: 'Se han enviado los aunfonos GM que llegaran el dia martes 12 de diciembre',
    time:'06:11',
    icon:''
  }
]
  constructor() { }

  ngOnInit() {}

}
