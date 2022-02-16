document.getElementById("hr").style.display = "none";
document.getElementById("displaying-bmi").style.display = "none";
document.getElementById("error-alerts").style.display = "none";

document.getElementById("find-bmi").onclick = () => {
  let height = document.getElementById("height").value;
  let heightUnit = document.getElementById("height-units").value;
  let weight = document.getElementById("weight").value;
  let weightUnit = document.getElementById("weight-units").value;

  let errors = "";

  if (weightUnit == "null") {
    errors += "<p><b>Please select the unit for weight</b></p>";
  }

  if (heightUnit == "null") {
    errors += "<p><b>Please select the unit for height</b></p>";
  }

  if (!height) {
    errors += "<p><b>Please enter your height</b></p>";
  }

  if (!weight) {
    errors += "<p><b>Please enter you weight</b></p>";
  }

  if (!errors) {
    if (weightUnit == "lbs") {
      weight = parseFloat(weight) * 0.453592;
    }
    if (weightUnit == "kg") {
      weight = parseFloat(weight);
    }

    if (heightUnit == "cm") {
      height = parseFloat(height) * 0.01;
    }
    if (heightUnit == "m") {
      height = parseFloat(height);
    }

    let BMI = (weight / (height * height)).toFixed(2);
    let bgColor = "";
    if (BMI < 18.5) {
      bgColor = "bg-danger";
    } else if (BMI >= 18.5 && BMI < 24.9) {
      bgColor = "bg-success";
    } else if (BMI >= 25 && BMI < 29.9) {
      bgColor = "bg-warning";
    } else if (BMI >= 30) {
      bgColor = "bg-danger";
    }
    document.getElementById("error-alerts").style.display = "none";
    document.getElementById("final-bmi").className += " " + bgColor;
    document.getElementById("final-bmi").innerText = BMI;
    document.getElementById("hr").style.display = "block";
    document.getElementById("displaying-bmi").style.display = "inline";
  } else {
    document.getElementById("hr").style.display = "block";
    document.getElementById("error-alerts").style.display = "block";
    document.getElementById("error-alerts").innerHTML = errors;
  }
};
