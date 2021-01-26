import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

export const CategoryDetail = styled.div`
  padding: 20px;
  background: #f5eddf;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryNames = styled.div`
  min-width: 25%;
  max-height: 800px;
  overflow-y: auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  .category-link {
    padding: 12px;
    font-size: 12px;
    color: #4c4439;
    text-transform: capitalize;
    cursor: pointer;
    border-bottom: 1px dotted #e0dede;
    &:hover, &.active {
      background: #f5eddf;
    }
    &.active {
      font-weight: bold;
    }
  }
`
export const CategoryDetailsTitle = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  font-weight: bold;
  color: #4c4439;
  margin-top: 10px;
  span {
    text-transform: capitalize;
  }
`

export const CategoryDetailsPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p + p {
    font-style: italic;
  }
`
