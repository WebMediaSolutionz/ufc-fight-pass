import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  private copyright: string;

  constructor() {
    let d = new Date();

    this.copyright = `${d.getFullYear()} Web Media Solutionz. All Rights Reserved.`;
  }

}
