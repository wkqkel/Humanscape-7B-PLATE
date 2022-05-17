import { useState, useRef, ChangeEvent, Suspense } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash';

import { fetchSickApi } from 'services/sick';

import SearchResult from 'components/SearchResult';
import styles from './search.module.scss';
import { SearchIcon } from 'assets/svgs';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(0);

  const { data, isLoading } = useQuery(
    ['fetchSickApi', inputValue],
    () => fetchSickApi(inputValue).then((res) => res.data.response.body.items.item),
    {
      enabled: !!inputValue,
      suspense: true,
      onSuccess() {
        console.count('count');
      },
    }
  );
  const debounceSetInput = useRef(debounce((val) => setInputValue(val), 300)).current;

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    debounceSetInput(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    window.location.href = `https://clinicaltrialskorea.com/studies?condition=${inputValue}`;
  };

  const keyDownHandler = (event: any) => {
    if (event.keyCode === 38 && active > 0) {
      setActive(active - 1);
    } else if (event.keyCode === 40) {
      setActive(active + 1);
    }
  };

  return (
    <main className={styles.main}>
      <header>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </header>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.inputWrap}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type='text'
            onChange={onChangeInput}
            placeholder='질환명을 입력해 주세요.'
            onKeyDown={keyDownHandler}
          />
        </div>
        <button type='submit' className={styles.searchButton} aria-label='Search button'>
          검색
        </button>
      </form>

      <SearchResult data={data} active={active} />
    </main>
  );
};

export default Search;
