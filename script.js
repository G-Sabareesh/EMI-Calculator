function calculateEMI() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value) / 100 / 12; // Annual rate to monthly rate
  
    var termType = document.getElementById('termType').value;
    var time = parseFloat(document.getElementById('time').value);
    if (termType === 'years') {
      time *= 12; // Convert years to months
    }
  
    var emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    var totalAmountPaid = emi * time;
  
    document.getElementById('emiResult').innerHTML = "EMI: ₹" + emi.toFixed(2) + "<br>Total Amount Paid: ₹" + totalAmountPaid.toFixed(2);
  }
  