export interface IUser {
  id: number;
  blocked: boolean;
  avatar: string | null;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}