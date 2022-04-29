import IBebida from "./IBebida";
import IPizza from "./IPizza";
import IPizza2Flavours from "./IPizza2Flavours";
import IPromocao from "./IPromocao";
import IUser from "./IUser";

export default interface IOrder {
    number: number,
    user: IUser,
    createDate: Date,
    status: string,
    pizzas: IPizza[],
    pizza2flavors: IPizza2Flavours[]
    drinks: IBebida[],
    promos: IPromocao[]
}