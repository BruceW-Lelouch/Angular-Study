import { Component } from '@angular/core';
import { ComunicateService } from './comunicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ServiceCommunicate';

  constructor(public service: ComunicateService) { }
}
