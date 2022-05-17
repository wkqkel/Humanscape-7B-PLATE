export interface IItem {
  sickCd: string;
  sickNm: string;
}

interface IItems {
  item: IItem[];
}

interface IBody {
  items: IItems;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

interface IHeader {
  resultCode: string;
  resultMsg: string;
}

interface IResponse {
  header: IHeader;
  body: IBody;
}

export interface ISickAPIRes {
  response: IResponse;
}
