const formEl = document.getElementById("dailyScheduleForm");
const ListEl = document.getElementById("dailyScheduleList");

function toDoSubmit(event){
    event.preventDefault();
    const activityInput = event.target.activity.value;
    const typeInput = event.target.type.value;

    if(!activityInput){
        alert("Please input activity before adding to list.");
        return;
    }
    if(!typeInput){
        alert("Please choose type before adding to list.")
    }
    createActivity(activityInput, typeInput);
    event.target.reset();
}

formEl.addEventListener("submit", toDoSubmit);

function createActivity(activity, type){
    const activityPlan = document.createElement("li")
    activityPlan.innerText = activity;
    if(type === "chore"){
        activityPlan.classList.add("chore");
    } else if (type === "reward"){
        activityPlan.classList.add("reward");
    }    
    ListEl.append(activityPlan);
    activityPlan.addEventListener("click", function(){
        activityPlan.classList.toggle("done");
    });
}

