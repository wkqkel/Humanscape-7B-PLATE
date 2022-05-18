import { useRef, ChangeEvent, KeyboardEvent } from 'react';
import { debounce } from 'lodash';

import { useAppDispatch, useKeys } from 'hooks';
import { searchActions } from 'states/search';

import styles from './searchBar.module.scss';
import { SearchIcon } from 'assets/svgs';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { downSelectIdx, upSelectIdx } = useKeys();

  const debounceSetInput = useRef(debounce((val) => dispatch(searchActions.setSearchValue(val)), 300)).current;

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    debounceSetInput(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') downSelectIdx(10);
    if (e.key === 'ArrowDown') upSelectIdx(10);
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
          onKeyDown={handleKeyDown}
        />
      </div>
      <button type='submit' className={styles.searchButton} aria-label='Search button'>
        검색
      </button>
    </form>
  );
};

export default SearchBar;
