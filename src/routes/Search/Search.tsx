import { useState, useEffect } from 'react';

import styles from './search.module.scss';
import { SearchIcon } from 'assets/svgs';

const searchList = [
  { name: "Klatskin's tumor", id: 125 },
  { name: '간세포암', id: 133 },
  { name: '갑상선암종', id: 187 },
  { name: '고환암', id: 335 },
  { name: '뼈암', id: 375 },
  { name: '구강암', id: 445 },
  { name: '치은암', id: 449 },
  { name: '기저세포상피종', id: 642 },
  { name: '상피성악성종양', id: 648 },
];

const Search = () => {
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = () => {};

  return (
    <main className={styles.main}>
      <header>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </header>
      <form className={styles.searchForm}>
        <div className={styles.inputWrap}>
          <SearchIcon className={styles.searchIcon} />
          <input className={styles.searchInput} type='text' placeholder='질환명을 입력해 주세요.' />
        </div>
        <button type='submit' className={styles.searchButton} aria-label='Search button'>
          검색
        </button>
      </form>
      <div className={styles.resultBox}>
        {searchList && <span>추천검색어</span>}
        <ul role='presentation'>
          {searchList.map((item) => (
            <li key={item.id}>
              <SearchIcon className={styles.searchIcon} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Search;
