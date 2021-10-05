import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NgxsModule, Store } from '@ngxs/store';
import { TestableComponent } from './testable.component';

describe('TestableComponent', () => {
  let component: TestableComponent;
  let fixture: ComponentFixture<TestableComponent>;

  const MockStore = jasmine.createSpyObj('Store', ['dispatch', 'select'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestableComponent ],
      providers: [
        {
        provide: Store,
        useValue: MockStore,
        },
      ],
      imports: [
        FormsModule,
        NgxsModule.forRoot([])
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

  it('should initialize to an empty textbox', () => {
    expect(component.formModel.testableTextbox).toBe('')
  })

  it('should not be submitted on initialization', () => {
    expect(component.hasBeenSubmitted).toBeFalse()
  })

  it('should save the form value when save is called', () => {
    // Arrange
    const dispatchMethodSpy: jasmine.Spy = MockStore.dispatch;

    // Act
    component.save()

    // Assert
    expect(dispatchMethodSpy).toHaveBeenCalled()
  })

  it('should not display the results-container when testableTextbox and hasBeenSubmitted are Falsy', () => {
    // Arrange
    component.hasBeenSubmitted = false
    component.formModel.testableTextbox = ''
    fixture.detectChanges()
    const resultsContainer: DebugElement = fixture.debugElement.query(By.css('#results-container'))

    // Act

    // Assert
    expect(resultsContainer).toBeFalsy()
  })

  it('should display the results-container if testableTextbox as been submitted', () => {
    // Arrange
    component.hasBeenSubmitted = true
    fixture.detectChanges()
    const resultsContainer: DebugElement = fixture.debugElement.query(By.css('#results-container'))

    // Act

    // Assert
    expect(resultsContainer).toBeTruthy()
  })

  it('should call the save method when the save button is clicked', () => {
    // Arrange
    component.hasBeenSubmitted = true
    fixture.detectChanges()
    spyOn(component, 'save')
    const saveButtonDE: DebugElement = fixture.debugElement.query(By.css('[data-cy=the-save-button]'))
    const saveButtonNE: HTMLElement = saveButtonDE.nativeElement

    // Act
    saveButtonNE.click()

    // Assert
    expect(component.save).toHaveBeenCalled()
  })

});
