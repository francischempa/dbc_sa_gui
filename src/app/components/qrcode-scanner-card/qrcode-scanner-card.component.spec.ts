import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeScannerCardComponent } from './qrcode-scanner-card.component';

describe('QrcodeScannerCardComponent', () => {
  let component: QrcodeScannerCardComponent;
  let fixture: ComponentFixture<QrcodeScannerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeScannerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeScannerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
