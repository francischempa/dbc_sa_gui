import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Person} from "../../interfaces/Person";

@Injectable({
  providedIn: 'root'
})
export class GeneralPubSubService {
  private qrcodePublishedBehaviourSubject = new BehaviorSubject<String>("");
  private personPublishedBehaviourSubject = new BehaviorSubject<Person>({});
  private personCheckedInSubject = new Subject<Person>();
  constructor() { }

  qrcode$ = this.qrcodePublishedBehaviourSubject.asObservable();
  person$ = this.personPublishedBehaviourSubject.asObservable();
  personCheckedIn = this.personCheckedInSubject.asObservable();

  publishQrCode(qrcode:String):void {
    this.qrcodePublishedBehaviourSubject.next(qrcode)
  }

  publishPerson(person:Person):void {
    this.personPublishedBehaviourSubject.next(person)
  }

  publishPersonCheckedIn():void {
    this.personCheckedInSubject.next();
  }
}
