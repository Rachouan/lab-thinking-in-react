import { ProductsRow } from "./ProductRow"

export const ProductsTable = ({filteredProducts}) => {
    return (
        <article>
            <div className="table w-full">
                <div className="table-header-group bg-gray-100 rounded">
                    <div className="table-row ">
                        <div className="table-cell text-left font-bold p-3">Name</div>
                        <div className="table-cell text-left font-bold p-3">Price</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {filteredProducts.map((product,i) => <ProductsRow {...product} key={i}/>)}
                </div>
            </div>
        </article>
    )
}