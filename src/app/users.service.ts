import { Injectable } from '@angular/core';
import { User } from './models/users.model';
import { UserActiveStatus } from './models/users.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUserById = (): Promise<User[]> =>
    new Promise((resolve) => {
      const users = [
        {
          firstName: 'Giorgi',
          lastName: 'Bazerashvili',
          birthDate: new Date('1996-4-25'),
          status: UserActiveStatus.Deleted,
        },
        {
          firstName: 'Luka',
          lastName: 'Botchorishvili',
          birthDate: new Date('1997-01-29'),
          status: UserActiveStatus.Active,
        },
        {
          firstName: 'Mariam',
          lastName: 'Botchorishvili',
          birthDate: new Date('1994-03-06'),
          status: UserActiveStatus.Inactive,
        },
      ];
      resolve(users);
    });
}
