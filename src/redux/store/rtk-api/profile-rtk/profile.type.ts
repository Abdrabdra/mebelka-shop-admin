export interface IProfile {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  user: {
    id: number;
    phone: string;
  };
}

export interface IProfileUpdate {
  firstName: string;
  secondName: string;
  email: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
}

export interface IMarketUpdate {
  title: string;
  street: string;
  phone: string;
  email: string;
}

export interface IMarket {
  data: IOneMarket[];
  count: number;
}

export interface IOneMarket {
  id: number;
  title: string;
  street: string;
  phone: string;
  imageUrl: string;
  email: string;
}
