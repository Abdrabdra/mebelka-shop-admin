export interface IOneAnnouncement {
  id: number;
  title: string;
  price: number;
  discount: number;
  colors: IColors[];
  images: IImages[];
  city: {
    id: number;
    title: string;
  };
  market: IMarket;
  status: {
    id: number;
    avg: number;
    commentCount: number;
  };
  info: {
    id: number;
    length: number;
    width: number;
    height: number;
    production: string;
    liftingMechanism: boolean;
    laundryBoxes: boolean;
    frames: IFrames[];
  };
}

export interface IMarket {
  id: number;
  title: string;
  street: string;
  phone: string;
  imageUrl: string;
  email: string;
}

export interface IColors {
  id: number;
  title: string;
  value: string;
}

export interface IFrames {
  id: number;
  title: string;
}

export interface IImages {
  id: number;
  imageUrl: string;
}
