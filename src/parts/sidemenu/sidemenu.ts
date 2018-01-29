import { Component, Input } from '@angular/core'

@Component({
  selector: 'side-menu',
  templateUrl: 'sidemenu.html'
})
export class SideMenu {
  @Input() title: string = "Title"

  constructor() {
  }
}
