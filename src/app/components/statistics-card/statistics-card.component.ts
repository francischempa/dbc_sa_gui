import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {BaseChartDirective, Label} from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import {Person} from "../../interfaces/Person";
import {GeneralPubSubService} from "../../services/shared/general-pub-sub.service";
import {GeneralWebService} from "../../services/general-web.service";

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css']
})
export class StatisticsCardComponent implements OnInit {
  // @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;


  public current_date = new Date().toLocaleDateString();
  public person: Person = {
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
    per_qrcode: "akfi32ialksdfajds"
  };
  public members_present: Person[] = [
  ];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  //GENERAL PARAM
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];

  //AGE
  public pieChartLabelsAge: Label[] = [' <- 17', '18 <-> 29', '30 -> '];
  public pieChartDataAge: number[] = [0, 0, 0];
  public pieChartColorsAge = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  //GENDER
  public pieChartLabelsGender: Label[] = ['Males', 'Females'];
  public pieChartDataGender: number[] = [0, 0];
  public pieChartColorsGender = [
    {
      backgroundColor: ['rgba(0,0,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(
    private generalPubSubService: GeneralPubSubService,
    private generalWebService: GeneralWebService
  ) { }

  ngOnInit(): void {
    // for (let i = 0; i < 100; i++) {
    //   this.members_present.push(this.person);
    // }
    this.generalPubSubService.personCheckedIn.subscribe(() => {
      this.getPersonsPresent()
    })
    this.getPersonsPresent()
  }

  getPersonsPresent():void{
    this.generalWebService.getPersonsPresent().subscribe((members:Person[]) => {
      this.members_present = members;
      this.updateData(members);
    })
  }

  updateData(members:Person[]):void {
    this.pieChartDataGender[0] = members.filter(value => Number(value.per_Gender)==1).length;
    this.pieChartDataGender[1] = members.filter(value => Number(value.per_Gender)==2).length;

    this.pieChartDataAge[0] = members.filter(value => this.yearDiff(value.per_BirthYear,value.per_BirthMonth,value.per_BirthDay)<18 && value.per_ID != '0').length
    this.pieChartDataAge[1] = members.filter(value => this.yearDiff(value.per_BirthYear,value.per_BirthMonth,value.per_BirthDay)<40 && this.yearDiff(value.per_BirthYear,value.per_BirthMonth,value.per_BirthDay)>18).length
    this.pieChartDataAge[2] = members.filter(value => this.yearDiff(value.per_BirthYear,value.per_BirthMonth,value.per_BirthDay)>39).length
    // this.chart.chart.update();
    this.charts.forEach((child) => {
      child.chart.update()
    });
  }

  yearDiff(year,month,day):Number{
    let date1 = new Date();
    let date2 = new Date(Number(year),Number(month),Number(day))
    return date1.getFullYear() - date2.getFullYear();
  }
}
