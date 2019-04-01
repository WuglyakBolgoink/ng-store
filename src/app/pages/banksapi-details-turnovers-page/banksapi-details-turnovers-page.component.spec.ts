import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BanksapiDetailsTurnoversPageComponent } from '@app/pages/banksapi-details-turnovers-page/banksapi-details-turnovers-page.component';

describe('BanksapiDetailsTurnoversPageComponent', () => {
  let component: BanksapiDetailsTurnoversPageComponent;
  let fixture: ComponentFixture<BanksapiDetailsTurnoversPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksapiDetailsTurnoversPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksapiDetailsTurnoversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
