import IBebida from "./IBebida";
import IPizza from "./IPizza";
import IPizza2Flavours from "./IPizza2Flavours";

export default interface ICardOrder {
    status: string,
    number: number,
    pizzas: string[],
    drinks: string[],
    //pizza2flavours: string[],
}