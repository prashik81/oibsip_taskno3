const add = document.getElementById("add-btn");
const incomptb = document.getElementById("incompleteid");
const comptb = document.getElementById("completeid");
const tskbtn = document.getElementById("complete-ls");
const inp = document.getElementById("inp");
const head = document.getElementById("headid");
const movetsktable = document.querySelector(".task-table");
const tskls = document.getElementById("tasklist");
const tskls_comp = document.getElementById("tasklist-comp");
// tskls_comp.innerHTML = "water"
const addtask2 = document.getElementById("add-task");
let check = true
let colorarr = ["red", "green", "grey", "blue", "pink", "rebeccapurple", "aqua"]
Showtasks()
Showcompletedtasks()
addtask2.addEventListener("click", () => {
  if (check) {
    tskbtn.innerHTML = "Task Completed"
    incomptb.classList.remove("hidden")
    comptb.classList.add("hidden")
    head.classList.remove("hidden")

    // movetsktable.style.marginTop = "100px"
    check = false
  }
  else {
    head.classList.add("hidden")
    // movetsktable.style.marginTop = "0px"
    check = true
  }
})

let str = "ergkrkg"
str = str.slice(0, str.length - 3)

console.log(str)
add.addEventListener("click", () => {
  let data = inp.value;

  inp.value ?
    addtaskLs(data) : ""

  inp.value = ""
});
function Showtasks() {
  tskls.innerHTML = ""
  let alltask = getalltask()

  for (let i = 0; i < alltask.length; i++) {
    addtask(alltask[alltask.length - 1 - i])
  };



}

function addtask(task1) {
  let task2 = task1.slice(0, task1.length - 3)
  // let num = Math.round(Math.random() * 7)
  const task = document.createElement("div");
  task.classList.add("task");
  // task.classList.add("remove-btn");

  task.innerHTML = `

  <input id="box" type="checkbox" 
  class="remove-btn"
  / >
  <p for="box" class="label">${task2}</p>
  <div class="circle"></div>
      
      `;
  tskls.appendChild(task)
  // let removetask = document.querySelector(".task")
  let crcl = task.querySelector(".circle")
  let lab = task.querySelector(".label")
  // lab.style.color = colorarr[num]
  crcl.style.width = "15px"
  crcl.style.height = "15px"
  // crcl.style.backgroundColor = colorarr[num]
  // crcl.classList.add = "circle"
  // task.querySelector(".circle").backgroundColor = "red"

  // console.log(colorarr[num].toString())
  const removebtn = task.querySelector(".remove-btn")
  // removebtn.style.backgroundColor = colorarr[num]
  console.log(removebtn.value + " checking")
  removebtn.addEventListener('click', () => {
    // removebtn.style.backgroundColor = "grey"
    // lab.style.color = colorarr[Math.round(Math.random() * 7)]
    task.style.backgroundColor = "grey"
    task.style.opacity = "0.5"

    if (removebtn.value == "on") {
      setTimeout(() => {


        completed_taskAdd(task1);

        // addCompletedtaskLs(task1)


        removetask(task1)

      }, 2000)




    }


    console.log(removebtn.value)
  })
}
function addtaskLs(data) {

  alltask = getalltask()

  // localStorage.
  localStorage.setItem("tasks", JSON.stringify([...alltask, data + (999 - Math.round(Math.random() * 100))]))
  // let demo = ["aryan", "prashik"]
  console.log(alltask)


  Showtasks()
}

// console.log(getalltask())
function getalltask() {
  let tasks = JSON.parse(localStorage.getItem("tasks"))
  return tasks === null ? [] : tasks
}




function removetask(task) {

  let alltask = getalltask()


  localStorage.setItem("tasks", JSON.stringify(alltask.filter((name) => name != task)))
  tskls.innerHTML = ""
  Showtasks()
}

// function comletedTasks(task) {
//   let box=

// }

function completed_taskAdd(task) {
  let tasklist = getalltask()
  console.log(task)
  let tskname = tasklist.filter((name) => {
    return name == task


  })
  addCompletedtaskLs(tskname)
  console.log(tskname)
  Showcompletedtasks()
}

function addCompletedtaskLs(data) {
  alltask = getallcompletedtask()

  // localStorage.



  localStorage.setItem("completedtasks", JSON.stringify([...alltask, data]))
  // let demo = ["aryan", "prashik"]
  console.log(alltask + "complete2")
}

// addcompletelist(task)

function getallcompletedtask() {
  let tasks = JSON.parse(localStorage.getItem("completedtasks"))
  return tasks === null ? [] : tasks
}

function addcompletelist(task1) {
  console.log("i work" + " " + task1)
  let task2 = task1[0].slice(0, task1[0].length - 3)
  console.log(task1[0].length)
  let num = Math.round(Math.random() * 7)
  let task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `

      
        <p class="label">${task2}</p>
     
<p>x</p>
      
       
      
      `;

  tskls_comp.appendChild(task)

}

function Showcompletedtasks() {
  tskls_comp.innerHTML = ""
  let alltask = getallcompletedtask()
  console.log(alltask + "completed")
  alltask.forEach(task1 => {

    // addtask(task1)
    addcompletelist(task1)
  });


}

tskbtn.addEventListener('click', () => {

  if (tskbtn.innerHTML == "Task Completed") {
    head.classList.add("hidden")
    incomptb.classList.add("hidden")
    comptb.classList.remove("hidden")
    tskbtn.innerHTML = "Incomplete Tasks"

  }
  else if (tskbtn.innerHTML == "Incomplete Tasks") {
    incomptb.classList.remove("hidden")
    comptb.classList.add("hidden")
    // head.classList.remove("hidden")
    tskbtn.innerHTML = "Task Completed"
  }


})