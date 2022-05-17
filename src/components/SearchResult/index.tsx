import styles from './searchResult.module.scss';
import { SearchIcon } from 'assets/svgs';
import { IItem } from 'types/sick.data';
import cx from 'classnames';
import { useState } from 'react';

interface props {
  data?: IItem[];
  active: number;
}

const SearchResult = ({ data, active }: props) => {
  return (
    <div className={styles.resultBox}>
      <ul role='presentation'>
        {data && <span>추천검색어</span>}

        {data?.map((item, idx) => (
          <li key={item.sickCd} className={cx({ [styles.active]: active === idx })}>
            <SearchIcon className={styles.searchIcon} />
            {item.sickNm}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
