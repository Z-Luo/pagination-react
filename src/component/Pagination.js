import React, { useEffect, useState } from "react";

const Pagination = (props) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 1; i < Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      arr.push(i);
    }
    setPageNumbers(arr);
  }, [props.postsPerPage, props.totalPosts]);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-itm">
            <button
              style={{
                background: props.curPage === number ? "grey" : null,
              }}
              onClick={() => props.setCurPage(number)}
              className="page-btn"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
