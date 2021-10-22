// calculating total of products
function calculateCartTotal(products) {
    const total = products.reduce((acc, el) => {
        acc += el.product.price * el.quantity
        return acc;
    }, 0)

    // toFixed rounds the answer to two decimal 
    const cartTotal = ((total * 100) / 100).toFixed(2)
    const stripeTotal = Number((total * 100).toFixed(2))

    return { cartTotal, stripeTotal };

}

export default calculateCartTotal;