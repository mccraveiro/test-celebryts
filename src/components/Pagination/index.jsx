import React from 'react';

function Pagination({ current, total, setPage }) {
  const pages = [];
  const maxPages = 10;

  const remainingPages = total - current;
  const offset = 5 + (remainingPages <= 4 ? 4 - remainingPages : 0);

  for (let i = Math.max(1, current - offset); pages.length < maxPages && i <= total; i++) {
    pages.push(i);
  }

  const handleClick = (e, page) => {
    e.preventDefault();
    setPage(page);
  };

  return (
    <ul className="pagination">
      {current > 1 &&
        <li key="previous">
          <a href="#" onClick={e => handleClick(e, current - 1)}>Previous</a>
        </li>
      }
      {pages.map(i => (
        <li
          key={i}
          className={i === current ? 'pagination-page-number active' : 'pagination-page-number'}
        >
          {i === current
            ? i
            : <a href="#" onClick={e => handleClick(e, i)}>{i}</a>
          }
        </li>
      ))}
      {current < total &&
        <li key="next">
          <a href="#" onClick={e => handleClick(e, current + 1)}>Next</a>
        </li>
      }
    </ul>
  );
}

export default Pagination;
