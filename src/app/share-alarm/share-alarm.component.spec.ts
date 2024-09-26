import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAlarmComponent } from './share-alarm.component';

describe('ShareAlarmComponent', () => {
  let component: ShareAlarmComponent;
  let fixture: ComponentFixture<ShareAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareAlarmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
