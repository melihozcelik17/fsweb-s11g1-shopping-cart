import { createContext, useContext, useState } from 'react';
import { data } from '../data';
import { CardContext } from './CardContext';


export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState(data);

    const { addItem } = useContext(CardContext)

    return (
        <ProductContext.Provider value={{
            products, addItem
        }} >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;