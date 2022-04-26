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
                cep: "",
                street: "",
                district: "",
                number: 0,
                complement: "",
            },
        },
        createDate: Date(),
        status: "",
        pizzas: {
            description: "",
            image: "",
            name: "",
            price: "",
        },
        pizza2flavors: {
            image: "",
            pizza1: {
                description: "",
                image: "",
                name: "",
                price: "",
            },
            pizza2: {
                description: "",
                image: "",
                name: "",
                price: "",
            },
            name: "",
            description: "",
            price: 0,
        },
        drinks: {
            description: "",
            image: "",
            name: "",
            price: "",
        },
    },
  });
  
  export const usePedidoContexto = () => useContext(orderContext);