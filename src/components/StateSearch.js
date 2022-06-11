import React, { useState, useEffect, useRef, useContext } from 'react';
import classnames from 'classnames';
import { useOnClickOrFocusOutside } from '../useOnClickOrFocusOutside';
import { SearchStateContext } from '../hooks/useSearchState';

const StateSearch = () => {
  const {
    query,
    onSetQuery,
    list,
    onPick,
  } = useContext(SearchStateContext);
  const [selected, setSelected] = useState(0);
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef(null);

  const onKeyUp = (event) => {
    const { key } = event;

    if (key === 'ArrowUp') {
      const newSelected = selected - 1;

      if (newSelected < 0) {
        return;
      }

      setSelected(newSelected);
    }

    if (key === 'ArrowDown') {
      const newSelected = selected + 1;

      if (newSelected > list.length - 1) {
        return;
      }

      setSelected(newSelected);
    }

    if (key === 'Enter') {
      const selectedItem = list[selected];
      if (selectedItem) {
        onPick(selectedItem);
      }
    }
  };

  useOnClickOrFocusOutside(
    wrapperRef,
    () => setFocused(false),
  );

  useEffect(() => {
    setSelected(0);
  }, [query]);

  return (
    <div className="field" ref={wrapperRef}>
      <div className="control">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <input
              value={query}
              onChange={({ target }) => onSetQuery(target.value)}
              className="input"
              type="text"
              placeholder="Wyszukaj..."
              onKeyUp={onKeyUp}
              onFocus={() => setFocused(true)}
            />
          </div>
          {focused && list.length > 0 && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                {list.map((item, index) => {
                  const { state } = item;

                  return (
                    <a
                      key={state}
                      className={classnames('dropdown-item', {
                        'is-active': selected === index,
                      })}
                      onMouseEnter={() => setSelected(index)}
                      onClick={() => onPick(item)}
                    >
                      {state}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateSearch;
