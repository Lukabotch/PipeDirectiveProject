import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { User, UserActiveStatus } from '../models/users.model';
import { TimeAgoPipe } from 'time-ago-pipe';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  usersLoaded: boolean = false;
  users: User[] | undefined = [];
  userNames: string[] | undefined = [];
  presentDate = new Date('2023-01-27');
  loadUsers() {
    this.usersLoaded = true;
    this.users = [];
    this.userNames = [];
    const users = new UsersService();
    users.getUserById().then((x) =>
      x.forEach((el) =>
        setTimeout(() => {
          this.users?.push(el);
          this.usersLoaded = false;
          this.userNames?.push(el.firstName);
        }, 1000)
      )
    );
  }
  selectClass(id: string): any {
    if (id == UserActiveStatus.Active) {
      return 'green';
    }
    if (id == UserActiveStatus.Deleted) {
      return 'red';
    }
    if (id == UserActiveStatus.Inactive) {
      return 'yellow';
    }
  }
  selectStyle(id: string): any {
    switch (id) {
      case UserActiveStatus.Active: {
        return { 'background-color': 'green', color: 'white' };
      }
      case UserActiveStatus.Deleted: {
        return { 'background-color': 'red', color: 'white' };
      }
      case UserActiveStatus.Inactive: {
        return { 'background-color': 'blue', color: 'white' };
      }
    }
  }
  changeDivColor(e: any, stat: string) {
    if (stat == UserActiveStatus.Inactive) {
      e.currentTarget.style.cssText = 'background-color:black;color:white';
    } else {
      e.currentTarget.style.cssText = 'background-color:black';
    }
  }
  formatDistance(id: Date) {
    return formatDistance(new Date(), id, { includeSeconds: false });
  }
}
