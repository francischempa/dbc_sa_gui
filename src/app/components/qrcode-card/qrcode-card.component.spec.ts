import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeCardComponent } from './qrcode-card.component';

describe('QrcodeCardComponent', () => {
  let component: QrcodeCardComponent;
  let fixture: ComponentFixture<QrcodeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrcodeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
