import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row no-bullets">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <button
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  );
}

export default Nav;
