import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";

@Component({
  selector: 'app-qrcode-card',
  templateUrl: './qrcode-card.component.html',
  styleUrls: ['./qrcode-card.component.css']
})
export class QrcodeCardComponent implements OnInit {
  width: number = 256;
  qrdata: String;

  constructor(
    private generalPubSubService: GeneralPubSubService
  ) { }

  ngOnInit(): void {
    this.generalPubSubService.qrcode$.subscribe(qrcode => {
      this.qrdata = qrcode;
    })
    this.qrdata = "No QrCode Detected";
  }

}
