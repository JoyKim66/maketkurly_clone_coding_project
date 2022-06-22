import React from "react";
import styled from "styled-components";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            <PageLi key={number} onClick={() => paginate(number)}>
                {number}
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

const PageUl = styled.ul`
  text-align: center;
  width: 60%;
  margin: 0 auto 60px auto;
  padding: 2px;
  border-top: 1px solid rgb(0,0,0, 0.2);
  border-bottom: 1px solid rgb(0,0,0, 0.2);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 14px;
  padding: 5px;
  border-radius: 20px;
  width: 20px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--maincolor);
  }
  &:focus::after {
    color: white;
    background-color: var(--maincolor);
    font-weight: 600;
  }
`;

export default Pagination;