import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {QRCodeModule} from "angularx-qrcode";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import { QrcodeScannerCardComponent } from './components/qrcode-scanner-card/qrcode-scanner-card.component';
import { QrcodeCardComponent } from './components/qrcode-card/qrcode-card.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { ProfileCardComponent } from './components/profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeScannerCardComponent,
    QrcodeCardComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    ZXingScannerModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
