import IPizza from "./IPizza";

export default interface IPizza2Flavours {
    image: string,
    pizza1: IPizza,
    pizza2: IPizza,
    name: string,
    description: string,
    price: number,
    __v: number,
    _id: string
};