function generateMarkSheet() {

    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);
    const subject6 = parseFloat(document.getElementById('subject6').value);
    const subject7 = parseFloat(document.getElementById('subject7').value);

    const totalMarks = (document.getElementById('totalMarks').value) 
    

    let obtainedMarks = subject1 + subject2 + subject3 + subject4 + subject5 + subject6 + subject7;
    let percentage = (obtainedMarks / totalMarks) * 100;
    let grade;

    percentage >= 90 ?  grade = "A+" : percentage >= 80 ?  grade = "A" : percentage >= 70 ? grade = "B" : percentage >= 60 ? grade = "C" : percentage >= 50 ?  grade = "D" :  grade = "F" 
    
    // if (percentage >= 90) {
    //     grade = "A+";
    // } else if (percentage >= 80) {
    //     grade = "A";
    // } else if (percentage >= 70) {
    //     grade = "B";
    // } else if (percentage >= 60) {
    //     grade = "C";
    // } else if (percentage >= 50) {
    //     grade = "D";
    // } else {
    //     grade = "F";
    // }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Mark Sheet</h3>
        <table>
            <tr>
                <th>Total Marks</th>
                <td>${totalMarks}</td>
            </tr>
            <tr>
                <th>Obtained Marks</th>
                <td>${obtainedMarks}</td>
            </tr>
            <tr>
                <th>Percentage</th>
                <td>${percentage.toFixed(2)}%</td>
            </tr>
            <tr>
                <th>Grade</th>
                <td>${grade}</td>
            </tr>
        </table>
    `;


    
        document.getElementById('markSheetForm').reset();

}
