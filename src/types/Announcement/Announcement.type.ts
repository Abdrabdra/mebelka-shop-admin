export interface IAnnouncementsResponse {
  data: IAnnouncement[];
  count: number;
}

export interface IAnnouncement {
  id: number;
  title: string;
  price: number;
  discount: number;
  images: [
    {
      id: number;
      imageUrl: string;
    }
  ];
}

export interface IUpdateProduct {
  length: number;
  width: number;
  height: number;
  production: string;
  liftingMechanism: boolean;
  laundryBoxes: boolean;
  decorId?: number;
  cityId?: number;
  price: number;
  discount: number;
  title: string;
  colors: string;
  frames: string;
}
