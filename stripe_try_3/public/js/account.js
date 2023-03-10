$(document).ready(function () {
  const PUBLISHABLE_KEY =
    'pk_test_51Mf72sFViEYBQjBWDwEiRx2g9dX7V9GhWVLIIITY0RSA4uTeSBTrhZgLOyPMASUJFcASYwb5JOCtDSmuoQ4aEXUc00HquJHmET';

  const stripe = Stripe(PUBLISHABLE_KEY);

  const checkoutbutton = $('#checkout-button');

  checkoutbutton.click(function () {
    const product = $('input[name="product"]:checked').val();

    fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    })
      .then((result) => result.json())
      .then(({ sessionId }) => stripe.redirectToCheckout({ sessionId }));
  });
});
