export interface ICreateAnnouncement {
  length: number;
  width: number;
  height: number;
  production: string;
  liftingMechanism: true;
  laundryBoxes: true;
  decorId: number;
  cityId: number;
  price: number;
  discount: number;
  title: string;
  marketId: number;
  categoryId: number;
  colors: string[];
  frames: string[];
}
