import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralPubSubService {
  private qrcodePublishedBehaviourSubject = new BehaviorSubject<String>("");
  constructor() { }

  qrcode$ = this.qrcodePublishedBehaviourSubject.asObservable();

  publishQrCode(qrcode:String):void {
    this.qrcodePublishedBehaviourSubject.next(qrcode)
  }
}
