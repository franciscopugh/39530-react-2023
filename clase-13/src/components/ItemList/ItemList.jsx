import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"
export const ItemList = ({products, plantilla}) => {
  return (
    <>
      {
        plantilla === 'item' 
        ? 
        products.map(producto => <Item item={producto} key={producto.id}/>)
        :
        products.map(producto => <ItemCart item={producto} key={producto.id}/>)
      }
    
    </>
  )
}