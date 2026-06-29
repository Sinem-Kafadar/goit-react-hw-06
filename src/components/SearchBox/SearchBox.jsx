import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  // Store'daki mevcut filtre değerini alıyoruz
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    // Kullanıcı yazdıkça Redux'taki changeFilter action'ını tetikliyoruz
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        className={css.input}
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
