import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';

const Page = ({value, isActive, onClick, isDisabled}) => (
  <li
    className={isActive ? 'active' : null}
  >
    <a className="cursor" onClick={onClick}>{value}</a>
  </li>
);

const Ellipsis = ({onClick, isDisabled}) => (
  <li className="disabled">
    <a>…</a>
  </li>
);

const FirstPageLink = ({isActive, onClick, isDisabled}) => (
  <li>
    <a className="cursor" onClick={onClick}>最初</a>
  </li>
);

const PreviousPageLink = ({isActive, onClick, isDisabled}) => (
  <li>
    <a className="cursor" onClick={onClick}>前</a>
  </li>
);

const NextPageLink = ({isActive, onClick, isDisabled}) => (
  <li>
    <a className="cursor" onClick={onClick}>次</a>
  </li>
);

const LastPageLink = ({isActive, onClick, isDisabled}) => (
  <li>
    <a className="cursor" onClick={onClick}>最後</a>
  </li>
);

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const WrapperComponent = ({children}) => (
  <div className="u-mt20p">
    <ul className="c-pagination">{children}</ul>
  </div>
)

const Pagination = createUltimatePagination({itemTypeToComponent, WrapperComponent});

export default Pagination;