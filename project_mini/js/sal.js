// let salObj = {
//   Name: "Sagar",
//   empId: "AA103",
//   month: "August",
//   bankName: "ICICI bank",
//   IFSC: "ICIC00123",
//   AcntNo: 1355454211,
//   pan: "ABCD12345",
//   basicSal: 10000,
//   hra: 2000,
//   medicalAllowance: 10000,
//   leaves: 2,
// };

$(document).ready(function () {
  $("#sal").on("click", function () {
    $("#renderPage").load("salaryslip.html");
    $.getJSON("../js/empdata.json", function (jd) {
      console.log(jd.Name);
      document.getElementById("fname").innerHTML = jd.Name;
      document.getElementById("empid").innerHTML = jd.empId;
      document.getElementById("month").innerHTML = jd.month;
      document.getElementById("bname").innerHTML = jd.bankName;
      document.getElementById("ifsc").innerHTML = jd.IFSC;
      document.getElementById("acnt").innerHTML = jd.AcntNo;
      document.getElementById("pan").innerHTML = jd.pan;
      document.getElementById("basicSal").innerHTML = jd.basicSal;
      document.getElementById("hra").innerHTML = jd.basicSal * jd.hra;
      document.getElementById("medAllowance").innerHTML = jd.medicalAllowance;
      document.getElementById("leaves").innerHTML = jd.leaves;
      let deduction;
      if (jd.leaves > 3) {
        deduction = 0.02 * jd.basicSal * (3 - jd.leaves);
        document.getElementById("leaveDeduction").innerHTML = deduction;
      } else {
        document.getElementById("leaveDeduction").innerHTML = 0;
      }
      let netPay =
        jd.basicSal + jd.basicSal * jd.hra + jd.medicalAllowance - deduction;
      document.getElementById("netPay").innerHTML = netPay;
    });
  });
});

function convertTopdf() {
  let doc = new jsPDF("p", "pt", "a4");

  doc.addHTML(document.getElementById("kk"), function () {
    doc.save("html.pdf");
  });
}
