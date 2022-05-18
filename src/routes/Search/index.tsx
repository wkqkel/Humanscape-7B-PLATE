import styles from './search.module.scss';
import SearchBar from 'routes/Search/SearchBar';
import Recommend from 'routes/Search/Recommend';

const Search = () => {
  return (
    <main className={styles.main}>
      <header>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </header>
      <SearchBar />
      <Recommend />
    </main>
  );
};

export default Search;
