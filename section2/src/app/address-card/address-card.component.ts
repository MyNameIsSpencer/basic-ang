import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  // user: any;
  // @Input('user') userObj: User;
  @Input('user') user: User;
  // @Input('name') userName: string = 'Temper';

  constructor() { 

    // this.user = {
    //   name: this.userName,
    //   title: 'Software Developer',
    //   address: '1234 Main St, City, State, 100010',
    //   phone: [
    //     '123-123-1234',
    //     '456-456-4567'
    //   ]
    // };

  }

  ngOnInit() {
    // this.user = {
      // name: 'Foo Bar',
      // name: this.userName,
      // title: 'Software Developer',
      // address: '1234 Main St, City, State, 100010',
      // phone: [
      //   '123-123-1234',
      //   '456-456-4567'
      // ]
    // };

    // this.user = {
    //   name: this.userObj.name,
    //   title: this.userObj.designation,
    //   address: this.userObj.address,
    //   phone: this.userObj.phone,
    // };

  }

}
