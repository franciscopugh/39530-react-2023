const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btn btn-dark">Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
