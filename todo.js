// creation of tasks

let IT = {
  coding: "web site",
  maintenance: "all machines",
  networking: "network cables",
  completed: false

}

let finance = {
  payment: "all-workers",
  buying: "materials",
  selling:"all things",
  completed: false

}

let marketting = {
  market: "all-places",
  selling: "materials",
  advertizing: "all strategies",
  completed: false

}

let humanResources = {
  hiring: "all-workers",
  assigning: "tasks",
  managing: "all-Services",
  completed: false

}
// function to add tasks to  TodoList

let TodoList=[];

function add(task){
  TodoList.push(task);
  
}




add(IT);
add(finance);
add(marketting);
add(humanResources);

// to remove task 

TodoList.pop();



// function to complete IT tasks

function complete(comple){
  let comp= TodoList.find(tas =>tas.coding===comple);
  comp.completed=true;
  console.log(TodoList);
}

complete("web site");







