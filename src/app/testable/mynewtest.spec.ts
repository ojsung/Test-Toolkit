import { TestableComponent } from "./testable.component"

describe('mynewtest', () => {
  const myTestableComponent = new TestableComponent(jasmine.createSpyObj('Store', ['dispatch', 'select']))
  myTestableComponent.formModel
})
