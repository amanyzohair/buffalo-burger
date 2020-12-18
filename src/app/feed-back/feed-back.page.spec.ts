import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedBackPage } from './feed-back.page';

describe('FeedBackPage', () => {
  let component: FeedBackPage;
  let fixture: ComponentFixture<FeedBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
