import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Plans() {
  const [currentPlan] = useState("Free"); // Set this based on user subscription
  const navigate = useNavigate();

  // Function to handle plan selection
  const handleSelectPlan = (plan) => {
    if (plan === "Premium") {
      navigate('/payment'); // Redirect to payment page for Premium plan
    }
  };

  return (
    <div className="plans-container">
      <h1 className="plans-title">Our Plans</h1>
      <div className="plans-card-container">
        {/* Free Plan Card */}
        <div className="plan-card">
          <h3>Free Plan</h3>
          <p className="plan-price">Free</p>
          <p className="plan-description">
            Access basic features including limited customization and support.
          </p>
          {currentPlan !== "Free" && (
            <button className="plan-button" onClick={() => handleSelectPlan("Free")}>
              Select Free Plan
            </button>
          )}
        </div>
        
        <div className="plan-card">
          <h3>Premium Plan</h3>
          <p className="plan-price">$9.99/month</p>
          <p className="plan-description">
            Enjoy advanced features like themes, analytics dashboard, and priority support.
          </p>
          {currentPlan !== "Premium" && (
            <button className="plan-button" onClick={() => handleSelectPlan("Premium")}>
              Select Premium Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Plans;
