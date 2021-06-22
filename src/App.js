import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Grid from "@material-ui/core/Grid";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <div className="page-image"></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

function App() {
  const bookRef = React.useRef();
  const [pages, setPages] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
    setTotalPages(bookRef.current.pageFlip().getPageCount());
  };

  return (
    <div>
      <div>
        <HTMLFlipBook
          width={300}
          height={500}
          ref={bookRef}
          onFlip={handleFlip}
        >
          <PageCover>Test Book</PageCover>
          {pages.map((item, index) => (
            <Page key={item} number={item}>
              <img
                style={{ width: 300 }}
                src={`${process.env.PUBLIC_URL}/abc2/abc2-0${item + 1}.jpg`}
                alt={item}
              />
            </Page>
          ))}
          <PageCover>END</PageCover>
        </HTMLFlipBook>
      </div>
      {currentPage} of {totalPages}
    </div>
  );
}

export default App;
