import {
  DriveIUnitEnum,
  StatementEnum,
  Status,
  TypeofEntityEnum,
  WheelEnum,
} from "./../Enums/index";

export interface IAnnouncementsResponse {
  data: IAnnouncement[];
  count: number;
}

export interface IAnnouncement {
  id: number;
  price: number;
  createdAt: Date;
  views: number;
  model: string;
  transmission: string;
  avatar: null | string;
  year: number;
  mileage: number;
  steeringWheel: WheelEnum;
  volume: number;
  state: StatementEnum;
  marka: string;
  city: string;
  body: string;
  like: string;
  countImages: string;
  profilelike: string;
}

export interface IAdminAnnouncementResponse {
  data: IAdminAnnouncement[];
  count: number;
}

export interface IAdminAnnouncement {
  id: number;
  price: number;
  description: string;
  createdAt: Date;
  status: Status;
  views: number;
}

export interface ILikeAnnouncement {
  announcementId: number;
  kind: TypeofEntityEnum;
}
