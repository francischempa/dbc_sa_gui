import { Component, OnInit } from '@angular/core';
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";
import {Person} from "../../interfaces/Person";
import {GeneralWebService} from "../../services/general-web.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  public person:Person = {
    per_ID: "01",
    per_Title: "Mr",
    per_FirstName: "Francis",
    per_MiddleName: "",
    per_LastName: "Chempa ",
    per_Suffix: "",
    per_Address1: "Nkoransah",
    per_Address2: "",
    per_City: "Kumasi",
    per_State: "Ashanti Region",
    per_Zip: "",
    per_Country: "Ghana",
    per_HomePhone: "0547932705",
    per_WorkPhone: "0547932705",
    per_CellPhone: "0547932705",
    per_Email: "francis.chempa@stu.ucc.edu.gh",
    per_WorkEmail: "francis.chempa@turntabl.io",
    per_BirthMonth: "3",
    per_BirthDay: "9",
    per_BirthYear: "1995",
    per_MembershipDate: "09 March, 1995",
    per_Gender: "Male",
    per_fmr_ID: "1",
    per_cls_ID: "",
    per_fam_ID: "",
    per_Envelope: "",
    per_DateLastEdited: "",
    per_DateEntered: "",
    per_EnteredBy: "",
    per_EditedBy: "",
    per_FriendDate: "",
    per_Flags: "",
    per_FacebookID: "",
    per_Twitter: "",
    per_LinkedIn: "",
    per_qrcode: ""
  };
  temperature: Number;
  constructor(
    private generalPubSubService: GeneralPubSubService,
    private generalWebService: GeneralWebService,
    private notifier: ToastrService
  ) { }

  ngOnInit(): void {
    this.generalPubSubService.person$.subscribe( (person:Person) => {
      this.person = person;
    })
  }

  checkInClicked() {
    this.generalWebService.checkInPerson(this.temperature, this.person.per_ID).subscribe((checked:boolean) => {
      if(checked){
        console.log('Checked in success');
        this.generalPubSubService.publishPersonCheckedIn();
        this.temperature = null;
        this.notifier.success((this.person.per_Title!=null ? this.person.per_Title : "") + " "+ this.person.per_FirstName + " checked In Successfully", "Checkin Success")
      }else{
        this.notifier.error("Could not check " + (this.person.per_Title!=null ? this.person.per_Title : "") + " "+ this.person.per_FirstName + " in.", "Failed Checkin")
      }
    })
  }
}
