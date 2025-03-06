import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  // Load cartItem from localStorage or initialize as empty array
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (itemId) => {
    setCartItem((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === itemId);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { id: itemId, count: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === itemId ? { ...item, count: item.count - 1 } : item
          )
          .filter((item) => item.count > 0) 
    );
  };

  const contextValue = { cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
