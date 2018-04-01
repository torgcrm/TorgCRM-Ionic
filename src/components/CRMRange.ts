import {Component} from "@angular/core";

@Component({
  templateUrl: 'crm-range.html',
  selector: 'crm-range'
})
export class CRMRange {
  value: number = 0;

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0)
      this.value--;
  }

}
