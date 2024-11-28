function Books({ name, date,image }) {
    return (
      <>
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
  
            <div className="ag-courses-item_title">
              {name}
            </div>
            <div className="ag-courses-item_title">
              <img src={image} alt="Image"/>
            </div>
  
            <div className="ag-courses-item_date-box">
              Start:
              <span className="ag-courses-item_date">
                {date}
              </span>
            </div>
          </a>
        </div>
      </>
    )
  }

  export default Books;