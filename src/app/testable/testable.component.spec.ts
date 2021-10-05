import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestableComponent } from './testable.component';

describe('TestableComponent', () => {
  let component: TestableComponent;
  let fixture: ComponentFixture<TestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestableComponent ],
      providers: [
      ],
      imports: [
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
