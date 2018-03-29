import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';
import PropTypes from 'prop-types';

const contextTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number
};

const isLinksHidden = (totalPages) => {
  return totalPages <= 5;
}

const isFirstPreviousLinksHidden = (currentPage) => {
  return currentPage <= 3;
}

const isLastNextLinksHidden = (currentPage, totalPages) => {
  return currentPage > totalPages - 3;
}

const Page = ({value, isActive, onClick}, {currentPage, totalPages}) => {
  if (value === 6 && isFirstPreviousLinksHidden(currentPage)) return null;
  if (value === 95 && isLastNextLinksHidden(currentPage, totalPages)) return null;

  return (
    <li className={isActive ? 'active' : null}>
      <a className="cursor" onClick={onClick}>{value}</a>
    </li>
  )
};
Page.contextTypes = contextTypes;

const Ellipsis = ({onClick}, {totalPages}) => {
  if (isLinksHidden(totalPages)) return null;

  return (
    (
      <li className="disabled">
        <a>…</a>
      </li>
    )
  )
};
Ellipsis.contextTypes = contextTypes;

const FirstPageLink = ({isActive, onClick}, {currentPage, totalPages}) => {
  if (isLinksHidden(totalPages) || isFirstPreviousLinksHidden(currentPage) || isActive) return null;

  return (
    (
      <li>
        <a className="cursor" onClick={onClick}>最初</a>
      </li>
    )
  )
};
FirstPageLink.contextTypes = contextTypes;

const PreviousPageLink = ({isActive, onClick}, {currentPage, totalPages}) => {
  if (isLinksHidden(totalPages) || isFirstPreviousLinksHidden(currentPage) || isActive) return null;

  return (
    <li>
      <a className="cursor" onClick={onClick}>前</a>
    </li>
  )
};
PreviousPageLink.contextTypes = contextTypes;

const NextPageLink = ({isActive, onClick}, {currentPage, totalPages}) => {
  if (isLinksHidden(totalPages) || isLastNextLinksHidden(currentPage, totalPages) || isActive) return null;

  return (
    <li>
      <a className="cursor" onClick={onClick}>次</a>
    </li>
  )
};
NextPageLink.contextTypes = contextTypes;

const LastPageLink = ({isActive, onClick}, {currentPage, totalPages}) => {
  if (isLinksHidden(totalPages) || isLastNextLinksHidden(currentPage, totalPages) || isActive) return null;

  return (
    <li>
      <a className="cursor" onClick={onClick}>最後</a>
    </li>
  )
};
LastPageLink.contextTypes = contextTypes;

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