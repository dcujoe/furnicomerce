import Stripe from 'stripe';
import uuidv4 from 'uuid/v4';
import jwt from 'jsonwebtoken';
import Cart from '../../models/Cart'
import calculateCartTotal from '../../utils/calculateCartTotal';



const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export default async(req, res) => {

    const { paymentData } = req.body;


    try {
        // 1. Verify and get user id from token 
        const { userId } = jwt.verify(
            req.headers.authorization, 
            process.env.JWT_SECRET);
        // 2. find cart based on user id and populate it 
        Cart.findOne({ user: userId }).populate({ 
            path: "products.product",
            model: "Product"
        })
        // 3. Calculate cart totals again from cart products
        const { cartTotal, stripeTotal } = calculateCartTotal(cart.products);
        // 4. Get email fro payment data, see if email is linked with existing stripe customer 
        const prevCustomer = await stripe.customers.list({
            email: paymentData.email,
            limit: 1
        });
        // 5. If not existing customer, create them based on their email 
        const isExistingCustomer = prevCustomer.data.length > 0;

        let newCustomer;
        if (!isExistingCustomer) {
            newCustomer = await stripe.customers.create({
                email: paymentData.email,
                source: paymentData.id
            })
        }

        const customer = (isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id;

        // 6. Create with charge total, send receipt email to stripe customer 
        await stripe.charges.create({
            currency: "usd",
            amount: stripeTotal,
            receipt_email: paymentData.email,
            customer,
            description: `Checkout | ${paymentData.email} | {paymentData.id}`
        })
        
        // 7. Add order data to database
        // 8. Clear products in cart
        // 9. Send back success (200) response
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing charge");

    }
}
