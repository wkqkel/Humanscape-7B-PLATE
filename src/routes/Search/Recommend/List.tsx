import cx from 'classnames';

import { highlightedText } from './utils';
import { useAppSelector } from 'hooks';
import { IItem } from 'types/sick.data';

import styles from './recommend.module.scss';
import { SearchIcon } from 'assets/svgs';
import { getSearchValue, getSelectIdx } from 'states/search';

interface props {
  data?: IItem[];
}

const List = ({ data }: props) => {
  const selectIdx = useAppSelector(getSelectIdx);
  const searchValue = useAppSelector(getSearchValue);

  if (!data) return null;

  return (
    <ul>
      {data.map((item, idx) => (
        <li key={item.sickCd} className={cx({ [styles.select]: selectIdx === idx })}>
          <SearchIcon className={styles.searchIcon} />
          {highlightedText(item.sickNm, searchValue)}
        </li>
      ))}
    </ul>
  );
};

export default List;
