import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddItem } from 'state/mock-http.actions';
import { MockHttpState } from 'state/mock-http.state';

@Component({
  selector: 'app-testable',
  templateUrl: './testable.component.html',
  styleUrls: ['./testable.component.scss']
})
export class TestableComponent implements OnInit {
  @Select(MockHttpState.items) items$!: Observable<string[]>;

  public formModel = {
    testableTextbox: ''
  }

  public hasBeenSubmitted: boolean = false

  constructor(private store: Store) {}

  ngOnInit(): void {}

  save() {
    this.store.dispatch(new AddItem(this.formModel.testableTextbox))
    this.hasBeenSubmitted = true
    this.formModel.testableTextbox = ''
  }

}
