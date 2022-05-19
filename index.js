const services = {
    "Wash Car": 10,
    "Mow Lawn": 20,
    "Pull Weeds": 30
}

let requestedServices = []
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const removeBtn = document.querySelector(".remove")
const requestedServicesEl = document.getElementById("requested-serivces")
const notesEl = document.getElementById("notes")
const totalAmountEl = document.getElementById("total-amount")
const sendBtn = document.getElementById("send-btn")

washBtn.addEventListener("click", function() {
    addService(washBtn)
})

mowBtn.addEventListener("click", function() {
    addService(mowBtn)
})

pullBtn.addEventListener("click", function() {
    addService(pullBtn)
})

sendBtn.addEventListener("click", function() {
    requestedServices = []
    renderServices()
    notesEl.textContent = ""
})


function addService(dom) {
    //console.log("button clicked")
        if(!requestedServices.includes(dom.textContent.split(":")[0]) ){
            
        requestedServices.push(dom.textContent.split(":")[0])
        renderServices()
        
        }
        // console.log(requestedServices)
}

function renderServices() {
    let str = ""
    let total = 0
    for(let i = 0; i < requestedServices.length; i++){
        
        str += `<div class="service-item">
            <div>
            <p class="service-name">${requestedServices[i]}</p>
            <p class="remove" onclick="removeTask(${i})">remove</p>
            </div>

            <p class="price"><span class="grey">$</span>${services[requestedServices[i]]}</p>
            </div>`
            
        total +=  services[requestedServices[i]]
    }
    
    requestedServicesEl.innerHTML = str
    totalAmountEl.textContent = "$" + total
    
    if(!notesEl.textContent) {
        notesEl.textContent = "We accept cash, credit card, or PayPal."
    } else if (requestedServices.length === 0) {
        notesEl.textContent = ""
    }
    
    
}

function removeTask(index) {
    // console.log("remove button clicked!")
    requestedServices.splice(index,1)
    renderServices()
    
}