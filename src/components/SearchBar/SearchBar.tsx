import { useState, useRef, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { debounce } from 'lodash';

import { fetchSickApi, useFetchResults } from 'services/sick';

import styles from './searchBar.module.scss';
import { SearchIcon } from 'assets/svgs';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const { data } = useFetchResults(inputValue);

  const debounceSetInput = useRef(debounce((val) => setInputValue(val), 300)).current;

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    debounceSetInput(event.target.value);
  };

  return (
    <form className={styles.searchForm}>
      <div className={styles.inputWrap}>
        <SearchIcon className={styles.searchIcon} />
        <input
          className={styles.searchInput}
          type='text'
          onChange={onChangeInput}
          placeholder='질환명을 입력해 주세요.'
        />
      </div>
      <button type='submit' className={styles.searchButton} aria-label='Search button'>
        검색
      </button>
    </form>
  );
};

export default SearchBar;
