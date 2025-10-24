import { Link } from "react-router-dom";
function HeaderCta() {
  return (
    <div className="header_cta">
      <p>
        Sign up and get 20% off to your first order.
        <span>
          <Link>Sign Up Now</Link>
        </span>
      </p>
    </div>
  );
}

export default HeaderCta;
