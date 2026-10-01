export const calculateGoldValue = (weightGrams, purity, config) => {
  if (!weightGrams || weightGrams <= 0) return 0;
  
  // The provided reference rate is strictly 7500 for 22K. 
  // If we assume it is the 22K rate as provided:
  const baseRate = config.referenceRate;
  let purityMultiplier = 1;

  // We map the purity to a multiplier assuming 22K is the baseline 1.0
  // Note: This is an architectural calculation strategy, but the actual PSV rules may differ.
  // We keep it structural.
  switch(purity) {
    case '18K': purityMultiplier = 18 / 22; break;
    case '20K': purityMultiplier = 20 / 22; break;
    case '22K': purityMultiplier = 1; break;
    case '24K': purityMultiplier = 24 / 22; break;
    default: purityMultiplier = 1;
  }

  const value = weightGrams * baseRate * purityMultiplier;
  return config.rounding ? Math.round(value) : value;
};

export const calculateEligibleLoan = (goldValue, config) => {
  // If LTV is pending/null, we cannot calculate the loan.
  if (config.ltv === null) return null;
  
  const loan = goldValue * (config.ltv / 100);
  return config.rounding ? Math.round(loan) : loan;
};

export const calculateOutstanding = (loanAmount, months, config) => {
  if (!loanAmount || months < 0 || !config.interestCompounding) return null;
  
  const r = config.interestRate / 100;
  const amount = loanAmount * Math.pow(1 + r, months);
  
  return config.rounding ? Math.round(amount * 100) / 100 : amount;
};

export const calculateInterestForMonth = (loanAmount, monthIndex, config) => {
  if (!loanAmount || monthIndex < 1 || !config.interestCompounding) return null;
  
  const r = config.interestRate / 100;
  const outstandingBefore = loanAmount * Math.pow(1 + r, monthIndex - 1);
  const interest = outstandingBefore * r;
  
  return config.rounding ? Math.round(interest * 100) / 100 : interest;
};
