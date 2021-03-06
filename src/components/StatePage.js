import React, { useContext } from 'react';
import { SearchStateContext } from '../hooks/useSearchState';

const StatePage = () => {
  const {
    currentState: {
      state,
      admission_date,
      capital_city,
      code,
      population,
      population_rank,
      map_image_url,
      state_flag_url,
      state_seal_url,
    },
    dataType,
  } = useContext(SearchStateContext);

  return (
    <div className="StatePage content">
      <h1 className="title is-1">{state}</h1>

      {dataType === 'symbols' && (
        <div className="Symbols">
          <div className="ImageWrapper">
            <img className="Flag" src={state_flag_url} />
          </div>
          <div className="ImageWrapper">
            <img src={state_seal_url} />
          </div>
        </div>
      )}

      {dataType === 'table' && (
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tbody>
            <tr>
              <td>Data przyłączenia</td>
              <td>{admission_date}</td>
            </tr>
            <tr>
              <td>Stolica</td>
              <td>{capital_city}</td>
            </tr>
            <tr>
              <td>Kod</td>
              <td>{code}</td>
            </tr>
            <tr>
              <td>Populacja</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Ranking populacji</td>
              <td>{population_rank}</td>
            </tr>
          </tbody>
        </table>
      )}

      {dataType === 'map' && <img className="Map" src={map_image_url} />}
    </div>
  );
};

export default StatePage;