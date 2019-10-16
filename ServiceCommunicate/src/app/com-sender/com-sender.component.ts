import { Component, OnInit } from '@angular/core';
import { ComunicateService } from '../comunicate.service';

@Component({
  selector: 'app-com-sender',
  templateUrl: './com-sender.component.html',
  styleUrls: ['./com-sender.component.scss']
})
export class ComSenderComponent implements OnInit {

  constructor(public service: ComunicateService) { }

  ngOnInit() {
  }

  showInfo() {
  	alert(this.service.info);
  }
}
