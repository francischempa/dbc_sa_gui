import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";

@Component({
  selector: 'app-qrcode-scanner-card',
  templateUrl: './qrcode-scanner-card.component.html',
  styleUrls: ['./qrcode-scanner-card.component.css']
})
export class QrcodeScannerCardComponent implements OnInit {
  autostart: boolean = true;
  qrcode: String;

  constructor(
    private generalPubSubService: GeneralPubSubService
  ) { }

  ngOnInit(): void {
  }


  scanSuccess($event: string) {
    this.qrcode = $event;
    this.generalPubSubService.publishQrCode($event);
  }

  camerasNotFound($event: any) {
    console.log("No camera found")
  }
}
