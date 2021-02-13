import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-qrcode-card',
  templateUrl: './qrcode-card.component.html',
  styleUrls: ['./qrcode-card.component.css']
})
export class QrcodeCardComponent implements OnInit {
  width: number = 256;
  qrdata: String;

  constructor(
    private generalPubSubService: GeneralPubSubService,
    private notifier: ToastrService
  ) { }

  ngOnInit(): void {
    this.generalPubSubService.qrcode$.subscribe(qrcode => {
      this.qrdata = qrcode;
    })
    this.qrdata = "No QrCode Detected";
  }

}
