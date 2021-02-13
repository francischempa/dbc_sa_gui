import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../interfaces/Person";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeneralWebService {

  public readonly BASE_URL = "http://chempa.xyz/chempa/";

  public readonly GET_USER = "getuser.php"; // per_qrcode
  public readonly GET_USERS = "getusers.php"; //
  public readonly GET_USERS_PRESENT = "getuserspresent.php"; //
  public readonly GET_IMAGE = "getimage.php"; // per_ID
  public readonly CHECK_IN = "checkin.php"; // per_ID && person_temp

  constructor(
    private http: HttpClient
  ) { }

  public getPerson(qrcode:string): Observable <Person> {
    return this.http
      .get<any>(this.BASE_URL + this.GET_USER,{ params : new HttpParams().set('per_qrcode', qrcode)})
      .pipe();
  }
  public getPersons(): Observable <Person[]> {
    return this.http
      .get<any>(this.BASE_URL + this.GET_USERS)
      .pipe();
  }

  public getPersonsPresent(): Observable <Person[]> {
    return this.http
      .get<any>(this.BASE_URL + this.GET_USERS_PRESENT)
      .pipe();
  }

  public checkInPerson(temperature,per_ID): Observable <boolean> {
    return this.http
      .get<any>(this.BASE_URL + this.CHECK_IN,{ params : new HttpParams().set('person_temp', temperature).set('per_ID',per_ID)} )
      .pipe();
  }
}
