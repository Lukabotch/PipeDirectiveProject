export enum UserActiveStatus{
  Active = 'Active',
  Inactive = 'Inactive',
  Deleted = 'Deleted'
}
export interface User{
  firstName: string;
  lastName: string;
  birthDate: Date;
  status:UserActiveStatus
}
