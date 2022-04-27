import IBebida from "./IBebida"
import IPizza from "./IPizza"
import IPizza2Flavours from "./IPizza2Flavours"

export default interface IPromocao {
    name: string,
    promoPrice: string,
    originalPrice: number,
    discount: number,
    pizzas: IPizza[],
    pizzas2flavors: IPizza2Flavours[],
    drinks: IBebida[]
    _id: string
};