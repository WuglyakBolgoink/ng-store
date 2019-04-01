import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BanksapiDashboardComponent } from '@app/components/banksapi-dashboard/banksapi-dashboard.component';

describe('BanksapiDashboardComponent', () => {
  let component: BanksapiDashboardComponent;
  let fixture: ComponentFixture<BanksapiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksapiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksapiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
