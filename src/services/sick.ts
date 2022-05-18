import axios from 'axios';
import { useQuery } from 'react-query';

import { ISickAPIRes } from 'types/sick.data';

const SICK_BASE_URL = `/B551182/diseaseInfoService/getDissNameCodeList`;

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

export const useFetchResult = (keyword: string) => {
  return useQuery(
    ['fetchSickApi', keyword],
    () => {
      console.count('count');
      return fetchSickApi(keyword).then((res) => res.data.response.body.items.item);
    },
    {
      enabled: !!keyword,
      staleTime: 6 * 10 * 1000,
    }
  );
};
