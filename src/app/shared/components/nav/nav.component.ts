import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.scss']
})
export class NavComponent {

  @Input() private title: string;

}
