function formatGrade(grade) {
    let result;

    if (grade >= 5.50) result = "Excellent";
    else if (grade >= 4.50) result = "Very good";
    else if (grade >= 3.50) result = "Good";
    else if (grade >= 3.00) result = "Poor";
    else (result = "Fail");

    if (grade < 3.00) {
        console.log('Fail (2)');
    }
    else
        console.log(`${result} (${grade.toFixed(2)})`);

}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)

