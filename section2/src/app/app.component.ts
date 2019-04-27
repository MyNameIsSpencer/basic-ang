import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User;

  constructor() {
    // let user: User = new User;
      this.user = new User();
      this.user.name = 'Foo Bar';
      this.user.designation = 'Software Developer';
      this.user.address = '1234 Main St, City, State, 100010';
      this.user.phone = [
        '123-123-1234',
        '456-456-4567'
      ];
  }

}
