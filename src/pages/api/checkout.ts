import { NextApiRequest, NextApiResponse } from "next"
import Stripe from 'stripe'
const stripe = new Stripe("sk_test_51OtVGNIKKLj4HEByl6cDHDhsec0s53veBKnYfSwsflUsw2fJ3wmDScA86zWBzSGyvwonvCYgmTXvoVaajpGS9ORY00bXQU9rGW")

export default async function POST(req:NextApiRequest, res:NextApiResponse){

  const body = req.body

  const session =  await stripe.checkout.sessions.create({
    success_url:'https://ecommerce-nu-wine.vercel.app/',
    line_items:body,
    mode:'payment'
  });

  return res.json(session)

}