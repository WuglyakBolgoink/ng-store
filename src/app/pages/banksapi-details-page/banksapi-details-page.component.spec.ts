import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BanksapiDetailsPageComponent } from '@app/pages/banksapi-details-page/banksapi-details-page.component';

describe('BanksapiDetailsPageComponent', () => {
  let component: BanksapiDetailsPageComponent;
  let fixture: ComponentFixture<BanksapiDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksapiDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanksapiDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
