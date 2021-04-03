import { Component, OnInit } from '@angular/core';
import {GeneralWebService} from "../../services/general-web.service";

@Component({
  selector: 'app-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.css']
})
export class SearchCardComponent implements OnInit {
    qrdata='1';
    width=190;
    ALL=[];
    filtered=[];
    person = {
        per_ID:"",
        per_FirstName:"",
        per_LastName:"",
        per_HomePhone:""
    };
    searchterm: string;

  constructor(
      private generalWebService: GeneralWebService
  ) { }

  ngOnInit(): void {
        this.generalWebService.getPersons().subscribe(value => {
           this.ALL = value;
           this.filtered = this.ALL;
           // console.log(this.filtered);
        });
  }

    personClicked(person):void {
        this.person = person;
    }

    filterNames() {
      const value = this.searchterm.trim().toLowerCase();
      if(value == "")
      {
          this.filtered = this.ALL;
          return;
      }
      const data = [];
      this.filtered = []
      var i = 0;
      for (;i<this.ALL.length; ++i){
          if(
              this.ALL[i].per_FirstName.toLowerCase().match(value) == null &&
              this.ALL[i].per_LastName.toLowerCase().match(value) == null
          ){

          }
          else{
              data.push(this.ALL[i]);
          }
      }
      this.filtered = data;
    }
}
