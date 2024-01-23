// 10026. Mortgage Calculator
// https://leetcode.com/problems/mortgage-calculator/description/
// T.C.: O(1)
// S.C.: O(1)
import React from 'react';

const calcMortgage = (loan, interest, term) => {
  const monthInterest = interest / 100 / 12;
  const totalPaymentMonths = term * 12;

  const k = Math.pow(1 + monthInterest, totalPaymentMonths);
  const monthlyPayment = (loan * monthInterest * k) / (k - 1);

  const totalPayment = monthlyPayment * totalPaymentMonths;
  const totalInterest = totalPayment - loan;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
  };
};

/**
 * @return {JSX.Element}
 */
export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = React.useState('');
  const [interestRate, setInterestRate] = React.useState('');
  const [loanTerm, setLoanTerm] = React.useState('');

  const [monthlyPayment, setMonthlyPayment] = React.useState('');
  const [totalPayment, setTotalPayment] = React.useState('');
  const [totalInterest, setTotalInterest] = React.useState('');

  const [errorMessage, setErrorMessage] = React.useState('');

  const cleanResult = () => {
    setMonthlyPayment('');
    setTotalPayment('');
    setTotalInterest('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loan = loanAmount.trim() === '' ? NaN : Number(loanAmount);
    const interest = interestRate.trim() === '' ? NaN : Number(interestRate);
    const term = loanTerm.trim() === '' ? NaN : Number(loanTerm);

    if ([loan, interest, term].some((v) => isNaN(v))) {
      cleanResult();
      setErrorMessage('Invalid values');
      return;
    }

    if ([loan, interest, term].some((v) => v <= 0)) {
      cleanResult();
      setErrorMessage('Values must be positive');
      return;
    }

    const { monthlyPayment, totalPayment, totalInterest } = calcMortgage(loan, interest, term);

    setErrorMessage('');
    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setTotalInterest(totalInterest);
  };

  const handleClear = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setErrorMessage('');
    cleanResult();
  };

  const formElStyle = { display: 'flex', justifyContent: 'space-between', width: 285, marginBottom: 5 };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={formElStyle}>
          <label style={{ marginRight: 10 }} htmlFor="loanAmount">
            Loan Amount:
          </label>
          <input placeholder="Loan amount" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
        </div>

        <div style={formElStyle}>
          <label style={{ marginRight: 10 }} htmlFor="interestRate">
            Interest Rate (%):
          </label>
          <input placeholder="Interest rate" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </div>

        <div style={formElStyle}>
          <label style={{ marginRight: 10 }} htmlFor="loanTerm">
            Loan Term (years):
          </label>
          <input placeholder="Loan term" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        </div>

        <div>
          <button type="submit" style={{ marginRight: 10 }}>
            Calculate
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {monthlyPayment && (
        <div>
          <strong>
            <p>Monthly payment: ${monthlyPayment}</p>
          </strong>
          <strong>
            <p>Total payment: ${totalPayment}</p>
          </strong>
          <strong>
            <p>Total interest: ${totalInterest}</p>
          </strong>
        </div>
      )}
    </div>
  );
};
