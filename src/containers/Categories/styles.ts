import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  overflow: hidden;
  div.category-names {
    min-width: 33%;
    max-height: 800px;
    overflow-y: auto;
    padding: 20px 0;
  }
  div.category-detail {
    padding: 20px;
    background: #f5eddf;
    width: 100%;
  }
`;

export const CategoryItem = styled.div`
  padding: 20px;
  text-transform: capitalize;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px dotted #e0dede;
  }
  &:hover, &.active {
    background: #f5eddf;
  }
`;

