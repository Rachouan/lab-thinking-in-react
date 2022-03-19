export const SearchBar = (props) => {
    
    const {values,events} = props;
    const {query,isInStock} = values;
    const {onSearch,onIsInStock} = events;

    const onSearchChange = (e) => onSearch(e.target.value);
    const onInStockChange = (e) => onIsInStock(e.target.checked);

    return (
        <header className="py-3">
            <form>
                <div className="flex gap-8 items-center">
                    <fieldset className="flex-1">
                        <input type="search" placeholder="Search by product" id="search" name="search" value={query} onChange={onSearchChange} className="focus:outline-none focus:ring focus:border-blue-500 w-full p-2 rounded border"/>
                    </fieldset>
                    <fieldset className="shrink flex gap-2 items-center">
                        <input type="checkbox" id="inStock" name="inStock" value={isInStock} onChange={onInStockChange} className="rounded text-pink-500"/>
                        <label htmlFor="inStock">In Stock</label> 
                    </fieldset>
                </div>
            </form>
        </header>
    )
}