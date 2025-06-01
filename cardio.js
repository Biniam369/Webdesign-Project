let toggleButton = document.getElementById('navToggle');
let navList = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});

navList.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
         navList.classList.remove('show');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('logForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevents default form submission

        // Get form data
        const workoutName = document.getElementById('workoutName').value;
        const duration = document.getElementById('duration').value;
        const caloriesBurned = document.getElementById('calories').value;
        const summaryDiv = document.getElementById('summary');

        
        // validating form data
        if(workoutName && duration && caloriesBurned){

            document.getElementById('summary').innerHTML = `
            <h3> Workout Summary </h3>
            <ul>
                <li><strong>Workout:</strong> ${workoutName}</li>
                <li><strong>Duration:</strong> ${duration} minutes</li>
                <li><strong>Calories Burned:</strong> ${caloriesBurned} kcal</li>
            </ul>
            `
            summaryDiv.style.display = 'block'; 
            // reset form fields
            form.reset();
        }else{
            // displaying message if fields are empty
            alert('Please fill in all fields before submitting.');
        }
    })
});

document.addEventListener("DOMContentLoaded", function () {

    const quizForm = document.getElementById('quiz');
    const resultDiv = document.getElementById('quizResult');

    quizForm.addEventListener('submit', function (e){
        e.preventDefault(); // prevents default form submission

        const level = document.getElementById('fitnessLevel').value;
        const goal = document.getElementById('goal').value;
        
        let resultMessage = "";
        if(level == "Beginner"){
            if(goal == "Strength")
                resultMessage = "Try Pushups and Bodyweight squats to build a solid foundations.";
            else if(goal == "Endurance")
                resultMessage = "Start with plank and Lunges for endurance and stability.";
            else if(goal == "Muscle")
                resultMessage = "Dumbbell Rows and Assisted Pull-ups are great beginner muscle builders. ";
        }else if(level == "Intermediate"){
            if(goal == "Strength")
                resultMessage = "Increase reps and add resistance to pushups, squats, and lunges.";
            else if(goal == "Endurance")
                resultMessage = "Combine plank holds and lunges in a circuit for endurance.";
            else if(goal == "Muscle")
                resultMessage = "Try pull-ups and dumbbell rows to boost muscle growth.";
        }else if(level == "Advanced"){
            if(goal == "Strength")
                resultMessage = "Weighted squats, pushups, and advanced pull-ups will challenge you";
            else if(goal == "Endurance")
                resultMessage = "Do timed circuits of plank, lunges and pull-ups.";
            else if(goal == "Muscle")
                resultMessage = "Focus on weighted Dumbbell Rows, pull-ups and advanced progressions. ";
        } else{
            resultMessage = "Please select a valid fitness level and goal.";
        }

        resultDiv.innerHTML = `
         <h3> Workout recommendation</h3>
         <p> ${resultMessage}</p>
        `;
        resultDiv.style.display = 'block'; // show the result div
    })
})