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
