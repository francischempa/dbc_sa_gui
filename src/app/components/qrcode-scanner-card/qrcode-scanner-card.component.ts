import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";
import {GeneralWebService} from "../../services/general-web.service";
import {Person} from "../../interfaces/Person";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-qrcode-scanner-card',
  templateUrl: './qrcode-scanner-card.component.html',
  styleUrls: ['./qrcode-scanner-card.component.css']
})
export class QrcodeScannerCardComponent implements OnInit {
  autostart: boolean = true;
  qrcode: String;

  constructor(
    private generalPubSubService: GeneralPubSubService,
    private generalWebService: GeneralWebService,
    private notifier: ToastrService
  ) { }

  ngOnInit(): void {
  }


  scanSuccess($event: string) {
    this.qrcode = $event;
    this.generalWebService.getPerson($event).subscribe( (person:Person) => {
      this.generalPubSubService.publishPerson(person);
      this.generalPubSubService.publishQrCode($event);
      this.notifier.success("Welcome, " + (person.per_Title!=null ? person.per_Title : "") + " " + person.per_FirstName, "Success")
    })

  }

  camerasNotFound($event: any) {
    this.notifier.error("Not Camera found", "Error")
  }
}
