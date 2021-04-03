import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {QRCodeModule} from "angularx-qrcode";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import { QrcodeScannerCardComponent } from './components/qrcode-scanner-card/qrcode-scanner-card.component';
import { QrcodeCardComponent } from './components/qrcode-card/qrcode-card.component';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import {HttpClientModule} from "@angular/common/http";
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import {ChartsModule} from "ng2-charts";
import {FormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SearchCardComponent } from './components/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QrcodeScannerCardComponent,
    QrcodeCardComponent,
    ProfileCardComponent,
    StatisticsCardComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    ZXingScannerModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    ChartsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
