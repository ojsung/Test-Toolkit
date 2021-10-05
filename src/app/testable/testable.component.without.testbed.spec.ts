import { Store } from "@ngxs/store"
import { TestableComponent } from "./testable.component"

describe('TestableComponent (no testbed)', () => {
  let component: TestableComponent
  let MockStore: jasmine.SpyObj<Store>

  beforeAll(() => {
    MockStore = jasmine.createSpyObj('Store', ['dispatch', 'select'])
  })

  beforeEach(() => {
    component = new TestableComponent(MockStore)
  })

  it('should dispatch a store event when the save method is called', () => {
    // Arrange
    const dispatchMethodSpy: jasmine.Spy = MockStore.dispatch
    // Act
    component.save()

    // Assert
    expect(dispatchMethodSpy).toHaveBeenCalled()
  })

  it('should initialize to a falsy state', () => {
    expect(component.formModel.testableTextbox).toBeFalsy()
    expect(component.hasBeenSubmitted).toBeFalse()
  })
})
