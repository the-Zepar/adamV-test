import { Button } from "./ui/button";

function PayButton({ amount }: { amount: number }) {
  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input
        type="hidden"
        name="public_key"
        value="CHAPUBK_TEST-DenAJk4czAzRnmS9WDHl7X5bLEVvGHMo"
      />
      <input
        type="hidden"
        name="tx_ref"
        value={`negade-tx-${(Math.random() + 1).toString(36).substring(7)}`}
      />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="email" value="tsagi265@gmail.com" />
      <input type="hidden" name="first_name" value="Israel" />
      <input type="hidden" name="last_name" value="Goytom" />
      <input type="hidden" name="title" value="Let us do this" />
      <input
        type="hidden"
        name="description"
        value="Paying with Confidence with cha"
      />
      <input
        type="hidden"
        name="logo"
        value="https://chapa.link/asset/images/chapa_swirl.svg"
      />
      <input
        type="hidden"
        name="callback_url"
        value="https://example.com/callbackurl"
      />
      <input type="hidden" name="return_url" value="http://localhost:5173" />
      <input type="hidden" name="meta[title]" value="test" />
      <Button className="w-full btn-primary" type="submit">
        Proceed to Checkout
      </Button>
    </form>
  );
}

export default PayButton;
