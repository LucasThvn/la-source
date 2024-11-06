export default function StripeTestCards(): JSX.Element {
  return (
    <div className="test-card-notice">
      <a
        href="https://stripe.com/docs/testing#cards"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carte de test :
      </a>{" "}
      <div className="card-number">
        4242<span></span>4242<span></span>4242<span></span>4242
      </div>
      .
    </div>
  );
}
