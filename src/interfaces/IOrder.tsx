import IPizza2Flavours from "./IPizza2Flavours";
import IUser from "./IUser";

export default interface IOrder {
    number: number,
    user: IUser,
    createDate: Date,
    status: string,
    pizzas: string[],
    pizza2flavors: string[]
    drinks: string[],
    _id: string,
    _v: number
}