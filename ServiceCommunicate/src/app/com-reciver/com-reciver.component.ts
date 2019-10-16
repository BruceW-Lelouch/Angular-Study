import { Component, OnInit } from '@angular/core';
import { ComunicateService } from '../comunicate.service';

@Component({
  selector: 'app-com-reciver',
  templateUrl: './com-reciver.component.html',
  styleUrls: ['./com-reciver.component.scss']
})
export class ComReciverComponent implements OnInit {

  constructor(public service: ComunicateService) { }

  ngOnInit() {
  }

  changeInfo() {
  	this.service.info = this.service.info + '1234';
  }

}
