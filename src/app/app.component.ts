import { Component,OnInit } from '@angular/core';
import {GeneralPubSubService} from "./services/shared/general-pub-sub.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(
    private generalPubSubService: GeneralPubSubService,
    private notifier: ToastrService
  ) {
  }
  ngOnInit(): void {
    this.generalPubSubService.personCheckedIn.subscribe(() => {
      this.showStatistics();
    })
    this.generalPubSubService.qrcode$.subscribe(value => {
      if(value != "")
      this.showProfile();
    })

  }
  title = 'src';
  hide_profile_card: boolean = true;
  hide_statistics_card: boolean = false;

  showStatistics() {
    this.hide_profile_card = true;
    this.hide_statistics_card = false;
  }

  showProfile() {
    this.hide_profile_card = false;
    this.hide_statistics_card = true;
  }
}
