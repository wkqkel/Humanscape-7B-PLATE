import { useAppSelector } from 'hooks';
import { useFetchResult } from 'services/sick';
import { getSearchValue } from 'states/search';

import styles from './recommend.module.scss';
import List from './List';
import Spinner from 'components/Spinner';

const SearchResult = () => {
  const searchValue = useAppSelector(getSearchValue);
  const { data, isLoading } = useFetchResult(searchValue);

  if (!searchValue) return null;

  return (
    <div className={styles.resultBox}>
      <span>추천검색어</span>
      {isLoading && <Spinner />}
      <List data={data} />
    </div>
  );
};

export default SearchResult;
