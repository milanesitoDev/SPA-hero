
export const Search = () =>{
    return (
        <>
        <h1>SearchPages</h1>
        <hr/>
        <div className="row">
           <div className="col-5">
            <h4>Searching</h4>
            <hr/>
            <form>
                <input type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                />
                <button className="btn btn-outline-primary mt-1">
                    Search
                </button>
            </form>
        </div>
        <div className="col-7">
            <h4>Results</h4>
            <hr/>
            <div className="alert alert-primary">
                Search a hero
            </div>
            <div className="alert alert-danger">
                No hero with <b>ABC</b>
            </div>
        </div> 
        </div>
        
        </>
    )
}