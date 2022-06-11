import React, { useContext } from 'react';
import { SearchStateContext } from '../hooks/useSearchState';
import Select from './Select';

const SearchKeySelect = () => {
  const {
    setSearchKey,
    searchKey,
  } = useContext(SearchStateContext);

  return (
    <Select
      label="Wyszukuj po"
      onSelect={setSearchKey}
      value={searchKey}
    >
      <option value="state">Nazwa</option>
      <option value="code">Kod stanu</option>
      <option value="capital_city">Stolica</option>
    </Select>
  );
}

export default SearchKeySelect;
