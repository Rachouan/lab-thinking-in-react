import { useState } from 'react';
import { SearchBar } from '../search/SearchBar';
import jsonData from './../data.json';
import { ProductsTable } from './ProductTable';

export const ProductsPage = () => {

    const [products] = useState(jsonData);
    const [searchQuery,setSearchQuery] = useState('')
    const [isInStock,setIsInStock] = useState(false)
    const filteredProducts = products.filter(({name,inStock}) => isInStock ? name.includes(searchQuery) && inStock : name.includes(searchQuery));
    const onSearch = (query) => setSearchQuery(query);
    const onIsInStock = (checked) => setIsInStock(checked);

    return (
        <section className="py-5">
            <h1 className="text-3xl font-bold">IronStore</h1>
            <SearchBar values={{searchQuery,isInStock}} events={{onSearch,onIsInStock}}/>
            <ProductsTable filteredProducts={filteredProducts} />
        </section>
    )
}