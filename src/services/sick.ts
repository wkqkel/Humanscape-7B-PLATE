import axios from 'axios';
import { useQuery } from 'react-query';

import { ISickAPIRes } from 'types/sick.data';

const SICK_BASE_URL = `/B551182/diseaseInfoService/getDissNameCodeList`;
// const SICK_BASE_URL = `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B551182/diseaseInfoService/getDissNameCodeList`;/
// http://apis.data.go.kr/B551182/diseaseInfoService/getDissNameCodeList?sickType=1&medTp=2&diseaseType=SICK_NM&searchText=병적 골절을&ServiceKey=

export const fetchSickApi = (searchText: string) =>
  axios.get<ISickAPIRes>(`${SICK_BASE_URL}`, {
    params: {
      searchText,
      ServiceKey: process.env.REACT_APP_API_KEY,
      numOfRows: '10',
      sickType: '1',
      medTp: '2',
      diseaseType: 'SICK_NM',
    },
  });

export const useFetchResults = (keyword: string) => {
  return useQuery(
    ['fetchSickApi', keyword],
    () => fetchSickApi(keyword).then((res) => res.data.response.body.items.item),
    {
      enabled: !!keyword,
      onSuccess() {
        console.count('count');
      },
    }
  );
};
