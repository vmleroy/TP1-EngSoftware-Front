import React, { Dispatch, SetStateAction, useContext } from 'react';

import IOrder from '../interfaces/IOrder';

interface IOrderContext {
    setOrder: Dispatch<SetStateAction<any>>;
    order: IOrder;
  }
  
  export const orderContext = React.createContext<IOrderContext>({
    setOrder: () => {},
    
    order: {
        number: 0,
        user: {
            name: "",
            email: "",
            cpf: "",
            phone: "", 
            addres: {
                city: "",
                cep: "",
                street: "",
                district: "",
                number: 0,
                complement: "",
            },
        },
        createDate: new Date(),
        status: "",
        pizzas: [{
            description: "",
            image: "",
            name: "",
            price: 0,
            _id: "",
        }],
        pizza2flavors: [{
            image: "",
            pizza1: {
                description: "",
                image: "",
                name: "",
                price: 0,
                _id: "",
            },
            pizza2: {
                description: "",
                image: "",
                name: "",
                price: 0,
                _id: "",
            },
            name: "",
            description: "",
            price: 0,
            _id: "",
        }],
        drinks: [{
            description: "",
            image: "",
            name: "",
            price: 0,
            _id: "",
        }],
    },

  });
  
  export const useOrderContext = () => useContext(orderContext);