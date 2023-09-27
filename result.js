function calculate() {
    var maths = parseFloat(document.getElementsByName("Maths Marks")[0].value);
    var science = parseFloat(document.getElementsByName("Science Marks")[0].value);
    var computer = parseFloat(document.getElementsByName("Computer Marks")[0].value);
    var english = parseFloat(document.getElementsByName("English Marks")[0].value);

    if (isNaN(maths) || maths < 0 || maths > 100 ||
    isNaN(science) || science < 0 || science > 100 ||
    isNaN(computer) || computer < 0 || computer > 100 ||
    isNaN(english) || english < 0 || english > 100) 
    {
    alert("Invalid input. Marks must be between 0 and 100.");
    return;
    }
    var total = maths + science + computer + english;
    var percentage = (total / 400) * 100;
    document.querySelector('input[name="total"]').value = total;
    document.querySelector('input[name="percentage"]').value = percentage.toFixed(2);
}

function showResult() {
    var username = document.querySelector('input[name="Username"]').value;
    var total = document.querySelector('input[name="total"]').value;
    var percentage = document.querySelector('input[name="percentage"]').value;
    // var result = "Username: " + username + "\nTotal Marks: " + total + "\nPercentage: " + percentage + "%";
    // alert(result);
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Username: " + username + "<br>Total Marks: " + total + "<br>Percentage: " + percentage + "%";
}