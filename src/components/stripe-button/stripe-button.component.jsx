import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GzjACLoFxh3yH0AVYLdWc9lim0LVDjBm5gMvOyS2nEtNtNdxWGzvv1hhXbonuTeVylzbRxqhKirww7pXWhzNhUZ00cKUcB7lX'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;