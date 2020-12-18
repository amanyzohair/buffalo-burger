import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostReviewedComponent } from './most-reviewed.component';

describe('MostReviewedComponent', () => {
  let component: MostReviewedComponent;
  let fixture: ComponentFixture<MostReviewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostReviewedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
