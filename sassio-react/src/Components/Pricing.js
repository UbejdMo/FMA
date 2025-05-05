function Pricing() {
  return (
    <div className="simple-pricing m-1 p-1">
      <div className="col-1 text-center">
        <button className="speciale-1 plans">PLANS</button>
        <br />
        <h1 className="display-1">Simple Pricing</h1>
        <p className="pricing-subtitle">
          Choose the plan that works best for you and your team.
        </p>
      </div>
      <div className="col text-center m-5">
        <span className="modify">Modify</span>
        <label className="switch-container mx-2">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Annually Save 30%</span>
      </div>
      <br />
      <div className="row gap-3">
        {/* Basic Plan */}
        <div className="col-4 basic">
          <button className="pro-btn">Most Popular</button>
          <br />
          <div className="basic-info">
            <p>Basic</p>
            <h2>Free</h2>
            <p className="mini">per month</p>
            <br />
          </div>
          <p className="pricing-paragraf">
            Standard listing submission, active for <br /> 30 days
          </p>
          <ul className="custom-list">
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">All Operating Supported</span>
            </li>
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">Basic Support</span>
            </li>
          </ul>
          <button className="basic-btn">GET STARTED</button>
          <br />
        </div>

        {/* Pro Plan */}
        <div className="col-4 pro">
          <button className="pro-btn">Most Popular</button>
          <br />
          <div className="pro-info">
            <p>Pro</p>
            <h2>$29</h2>
            <p className="mini">per month</p>
            <br />
          </div>
          <p className="pricing-paragraf">
            Advanced listing submission, active for <br /> 60 days
          </p>
          <ul className="custom-list">
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">All Operating Supported</span>
            </li>
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">Priority Support</span>
            </li>
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">Custom Features</span>
            </li>
          </ul>
          <button className="pro-btn">GET STARTED</button>
          <br />
        </div>

        {/* Enterprise Plan */}
        <div className="col-4 enterprise">
          <button className="pro-btn">Most Popular</button>
          <br />
          <div className="enterprise-info">
            <p>Enterprise</p>
            <h2>$99</h2>
            <p className="mini">per month</p>
            <br />
          </div>
          <p className="pricing-paragraf">
            Premium listing submission, active for <br /> 90 days
          </p>
          <ul className="custom-list">
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">All Operating Supported</span>
            </li>
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">24/7 Support</span>
            </li>
            <li>
              <div className="icon-container-custom done">
                <span className="material-symbols-outlined check-small">
                  check_small
                </span>
              </div>
              <span className="text">Dedicated Account Manager</span>
            </li>
          </ul>
          <button className="enterprise-btn">GET STARTED</button>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
