function grade() {
let numSubject = parseInt.prompt("Enter your marks each subject?");
if (isNaN(numSubject) || numSubject <= 0) {
    alert("Please enter a valid number of subjects.");
    return;
}

let marks;

let totalmarks=0;
let avg;
for (let i = 0; i < numSubject; i++) {
  
  marks =parseInt.prompt("Enter your marks each subject?"+(i+1)+ ":");
  if (isNaN(marks) || marks < 0) {
    alert("Please enter a valid mark.");
    return;
}

  totalmarks += marks;
}
  avg = totalmarks/numSubject
document.getElementById(results).innerHTML= "Total Marks" + totalmarks +   "Average Marks" +  avg.toFixed(2)
}
