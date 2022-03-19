export const ProductsRow = ({category,price,inStock,name,id}) => {
    return (
        <div className="table-row">
            <div className="table-cell p-2"><span className={!inStock? `text-red-600` : `text-black`}>{name}</span></div>
            <div className="table-cell p-2">{price}</div>
        </div>
    )
}