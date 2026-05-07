import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyLoan.css";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    amount: "",
    tenure: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.amount || !formData.purpose || !formData.tenure) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://loanaptech-69ab.onrender.com/api/loans/apply", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        credentials: "include",
        body: JSON.stringify({
          amount: formData.amount,
          duration: formData.tenure,
          purpose: formData.purpose,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Application failed");

      alert("Application Successful");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h1 className="apply-title">Apply For A Loan</h1>
        <form className="apply-form" onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" value={user?.name || ''} readOnly />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" value={user?.email || ''} readOnly />
          </div>

          <div className="input-group">
            <label>Loan Amount ($)</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Loan Tenure (months)</label>
            <input type="number" name="tenure" value={formData.tenure} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Purpose Of Loan</label>
            <textarea name="purpose" value={formData.purpose} onChange={handleChange} required />
          </div>

          <button className="apply-submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoan;