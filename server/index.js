require('dotenv').config(); //PORT and STRIPE_KEY are protected
const express = require('express');
const cors = require('cors');

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/pay', async (req, res) => { //endpoint for Stripe payments
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: 'You must enter a name.' });
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 999, //$9.99 USD
            currency: 'usd',
            payment_method_types: ['card'],
            metadata: {name}
        });
        const clientSecret = paymentIntent.client_secret;
        res.json({ message: 'Payment success.', clientSecret});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server failed sending payment to Stripe.' });
    }
});

const PORT = 3003;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));