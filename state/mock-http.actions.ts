export class AddItem {
  static readonly type = '[MockHttp] Add item';
  constructor(public payload: string) { }
}
