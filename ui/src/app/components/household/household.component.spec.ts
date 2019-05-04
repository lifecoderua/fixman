import { ComponentFixture, DebugElement, TestBed } from 'angularjs-testbed';
import { HouseholdComponent } from './household.component';

describe('HouseholdComponent', () => {
  let component: HouseholdComponent;
  let fixture: ComponentFixture<HouseholdComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdComponent ]
    });

    fixture = TestBed.createComponent(HouseholdComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  afterEach(() => TestBed.resetTestingModule());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
