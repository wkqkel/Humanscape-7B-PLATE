import { getSelectIdx, searchActions } from 'states/search';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useKeys = () => {
  const dispatch = useAppDispatch();
  const selectIdx = useAppSelector(getSelectIdx);

  const downSelectIdx = (length: number) => {
    if (selectIdx >= length) {
      dispatch(searchActions.setSelectIdx(0));
    } else {
      dispatch(searchActions.setSelectIdx(selectIdx - 1));
    }
  };

  const upSelectIdx = (length: number) => {
    if (selectIdx >= length - 1) {
      dispatch(searchActions.setSelectIdx(0));
    } else {
      dispatch(searchActions.setSelectIdx(selectIdx + 1));
    }
  };

  return {
    upSelectIdx,
    downSelectIdx,
  };
};

export default useKeys;
