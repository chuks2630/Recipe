
const Banner = ({setKeyword, keyword,handleFilter})=>{

    return(
        <>
            <div className="row bg-breadcrumb banner">
  <div className="col text-center py-5">
    <h3 className="text-white display-3 mb-4"> Recipes at your fingertip...</h3>
    <form>
      <div className="row gx-0">
        <div className="col-md-6 offset-md-2">
          <input
            type="text"
            placeholder="search by keyword"
            className="form-control border-light noround"
            value={keyword}
            onChange = {
              (event)=>{
                setKeyword(event.target.value)
                handleFilter()
              }
            }
          />
        </div>
        <div className="col-md-2">
          <button className="btn custom-btn col-12 noround border-light">
            Search
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

        </>
    )
}
export default Banner;