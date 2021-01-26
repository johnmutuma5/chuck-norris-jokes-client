import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  overflow: hidden;
  div.category-names {
    min-width: 25%;
    max-height: 800px;
    overflow-y: auto;
    padding: 20px 0;
  }
  div.category-detail {
    padding: 20px;
    background: #f5eddf;
    width: 100%;
    div.detail-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      p.title {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 5px;
      }

      p + p {
        font-style: italic;
      }
    }
  }
  div.category-detail-title {
    display: flex;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #4c4439;
    span {
      text-transform: capitalize;
    }
  }

`;

export const CategoryItem = styled.div`
  padding: 12px;
  font-size: 12px;
  text-transform: capitalize;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px dotted #e0dede;
  }
  &:hover, &.active {
    background: #f5eddf;
  }
  &.active {
    font-weight: bold;
  }
`;

