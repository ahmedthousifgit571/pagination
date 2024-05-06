import React from "react";

function Pagination({products,page,setPage}) {
 
    const selectPageHandler = (selectedPage) => {
        if (
          selectedPage >= 1 &&
          selectedPage <= products.length / 10 &&
          selectedPage !== page
        ) {
          setPage(selectedPage);
        }
      };

  return (
    <div className="pagination">
      <span
        className={page > 1 ? "" : "pagination__disable"}
        onClick={() => selectPageHandler(page - 1)}
      >
        ⬅️
      </span>
      {[...Array(products.length / 10)].map((_, i) => {
        return (
          <span
            className={page === i + 1 ? "pagination__selected" : ""}
            onClick={() => selectPageHandler(i + 1)}
            key={i}
          >
            {i + 1}
          </span>
        );
      })}

      <span
        className={page < products.length / 10 ? "" : "pagination__disable"}
        onClick={() => selectPageHandler(page + 1)}
      >
        ➡️
      </span>
    </div>
  );
}

export default Pagination;
