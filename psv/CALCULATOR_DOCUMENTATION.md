# Calculator Documentation

## Status
**VERIFIED / CALCULATION ENABLED** - The official calculation formula has been integrated and validated.

## Current Implementation
The calculator is now fully functional, implementing the explicit PSV Gold Loan formula requirements:

- **Reference 22K Gold Rate:** ₹7,500/g
- **22K Eligible Loan Value:** ₹7,500/g
- **Interest:** 2.0% monthly
- **Interest Method:** Monthly Compounding
- **Processing Fee:** ₹0 / Not Applicable
- **Other Charges:** ₹0

### Calculations
- **Initial Principal (P):** `Weight × 22K Eligible Loan Value`
- **Total Outstanding (A) after n months:** `P × (1.02)^n`
- **Month n Interest:** `A_previous × 0.02`

If the applicable monthly interest is not settled, it is added to the outstanding principal for the following month. The calculations adapt dynamically depending on the selected loan duration.

## Tests
Example: 5g of 22K Gold

**Month 1:**
- Initial Loan: ₹37,500
- Interest (2%): ₹750
- Closing Outstanding: ₹38,250

**Month 2:**
- Opening Principal: ₹38,250
- Interest (2%): ₹765
- Closing Outstanding: ₹39,015

**Month 3:**
- Opening Principal: ₹39,015
- Interest (2%): ₹780.30
- Closing Outstanding: ₹39,795.30

All results are displayed accurately via `Calculator.jsx`.
