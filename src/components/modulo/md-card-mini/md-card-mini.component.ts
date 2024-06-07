import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-md-card-mini',
  templateUrl: './md-card-mini.component.html',
  styleUrls: ['./md-card-mini.component.scss'],
})
export class MdCardMiniComponent  implements OnInit {
  @Input() headModulo={} as any;
  constructor() {}
  ngOnInit() {}
 
}
