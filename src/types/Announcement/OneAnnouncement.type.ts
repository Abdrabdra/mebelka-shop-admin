import { DriveIUnitEnum, StatementEnum, Status, WheelEnum } from "../Enums";

export interface IOneAnnouncementResponse {
  a: {
    id: number;
    price: number;
    description: string;
    createdAt: Date;
    status: Status;
    views: number;
    about: {
      id: number;
      year: number;
      mileage: number;
      steeringWheel: WheelEnum;
      driveUnit: DriveIUnitEnum;
      volume: number;
      state: StatementEnum;
      customsClearance: boolean;
    };
    images: IOneImage[];
    author: {
      id: number;
      firstName: string;
      user: {
        id: number;
        phone: string;
      };
    };
    marka: IOneTitle;
    city: IOneTitle;
    body: IOneTitle;
    model: IOneTitle;
  };
  count: {
    commentsCount: number;
    likesCount: number;
  };
}

interface IOneTitle {
  id: number;
  title: string;
}

export interface IOneImage {
  id: number;
  image: string;
}
