import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from './services/shared/general-pub-sub.service';
import {ToastrService} from 'ngx-toastr';

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
  title = 'src';
  hide_profile_card = true;
  hide_statistics_card = false;
  hide_search_card = true;
  ngOnInit(): void {
    this.generalPubSubService.personCheckedIn.subscribe(() => {
      this.showStatistics();
    });
    this.generalPubSubService.qrcode$.subscribe(value => {
      if (value != '') {
      this.showProfile();
      }
    });
    // this.showSearch();
  }

  showStatistics() {
    this.hide_profile_card = true;
    this.hide_statistics_card = false;
    this.hide_search_card = true;
  }

  showProfile() {
    this.hide_profile_card = false;
    this.hide_statistics_card = true;
    this.hide_search_card = true;
  }

  showSearch() {
    this.hide_profile_card = true;
    this.hide_statistics_card = true;
    this.hide_search_card = false;
  }
}
