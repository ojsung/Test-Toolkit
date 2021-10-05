import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddItem } from './mock-http.actions';

export class MockHttpStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<MockHttpStateModel>({
  name: 'mockHttp',
  defaults
})
@Injectable()
export class MockHttpState {
  @Selector()
  static items(state: MockHttpStateModel) {
    return state.items;
  }


  @Action(AddItem)
  add({ getState, setState }: StateContext<MockHttpStateModel>, { payload }: AddItem) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
