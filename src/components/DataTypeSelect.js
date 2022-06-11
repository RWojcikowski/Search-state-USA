import React, { useContext } from 'react';
import { SearchStateContext } from '../hooks/useSearchState';
import Select from './Select';

const DataTypeSelect = () => {
  const {
    setDataType,
    dataType,
  } = useContext(SearchStateContext);

  return (
    <Select
      label="Pokaż dane"
      onSelect={setDataType}
      value={dataType}
    >
      <option value="table">Tabela</option>
      <option value="symbols">Symbole</option>
      <option value="map">Mapa</option>
    </Select>
  );
}

export default DataTypeSelect;
