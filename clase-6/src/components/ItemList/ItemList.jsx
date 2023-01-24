import { Item } from "../Item/Item"
export const ItemList = ({products}) => {
  return (
    <>
        {products.map(producto => <Item item={producto} key={producto.id}/>)}
    </>
  )
}