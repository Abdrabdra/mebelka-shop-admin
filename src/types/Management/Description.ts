export interface IGetDescriptionResponse {
  id: number;
  title: string;
  tags: IDescriptionTag[];
}

export interface IDescriptionTag {
  id: number;
  title: string;
}
