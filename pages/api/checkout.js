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
        // 2. find cart based on user id and populate it 
        // 3. Calculate cart totals again from cart products
        // 4. Get email fro payment data, see if email is linked with existing stripe customer 
        // 5. If not existing customer, create them based on their email 
        // 6. Create with charge total, send receipt email to stripe customer 
        // 7. Add order data to database
        // 8. Clear products in cart
        // 9. Send back success (200) response
    } catch (error) {
        console.error(error);
        res.status(500).send("Error processing charge");

    }
}
