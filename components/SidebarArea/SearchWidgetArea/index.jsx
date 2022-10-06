const SearchWidgetArea = () => {

  return (
    <>
      <div className="search-widget-area mb-50">
          <form>
              <input type="search" name="search" id="search" placeholder="Search..." />
              <button type="submit" className="btn"><i className="fa fa-search"></i></button>
          </form>
      </div>
    </>
  );
}

export default SearchWidgetArea;