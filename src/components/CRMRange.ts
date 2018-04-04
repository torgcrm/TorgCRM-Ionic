import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  templateUrl: 'crm-range.html',
  selector: 'crm-range'
})
export class CRMRange {
  @Input() quantity: number;
  @Input() idx: number;

  @Output()
  public increment: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public decrement: EventEmitter<any> = new EventEmitter<any>();

  onIncrement() {
    this.increment.emit(this.idx)
  }

  onDecrement() {
    this.decrement.emit(this.idx)
  }
}
