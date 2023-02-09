export interface ICreateRegion {
  title: string;
  regionId?: number;
}

export interface IGetRegion {
  id: number;
  title: string;
  cities: IRegion[];
}

export interface IRegion {
  id: number;
  title: string;
}
