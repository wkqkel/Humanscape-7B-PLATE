import type { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INIT_STATE {
  searchValue: string;
  selectIdx: number;
}

const initialState: INIT_STATE = {
  searchValue: '',
  selectIdx: -1,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state: INIT_STATE, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSelectIdx: (state: INIT_STATE, action: PayloadAction<number>) => {
      state.selectIdx = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const searchActions = searchSlice.actions;

export const getSearchValue = (state: RootState): string => state.search.searchValue;
export const getSelectIdx = (state: RootState): number => state.search.selectIdx;
