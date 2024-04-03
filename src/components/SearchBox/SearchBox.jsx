import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setNameFilter} from "../../redux/filtersSlice.js";


const SearchBox = () => {
    const dispatch = useDispatch();
    const nameFilter = useSelector(state => state.filters.nameFilter);

    const handleFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value));
    };

    return (
        <div className={styles.searchBox}>
            <input type="text" value={nameFilter} onChange={handleFilterChange} />
        </div>
    );
}

export default SearchBox;