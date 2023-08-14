import { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {

    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useLocalStorage("s11g1", [])

    const addItem = (item) => {
        setCart([...cart, item])
        // verilen itemi sepete ekleyin

    }
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }



    return (
        <CardContext.Provider value={{
            cart, addItem, removeItem
        }} >
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;





