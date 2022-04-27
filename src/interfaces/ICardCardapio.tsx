export default interface ICardCardapio {
    _id: string
    description: string,
    image: string,
    name: string,
    price: number,
    handleClick: (id: string) => void,
}