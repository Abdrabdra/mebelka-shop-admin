export interface IProfile {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}

export interface IProfileUpdate {
  firstName: string;
  secondName: string;
  email: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}
