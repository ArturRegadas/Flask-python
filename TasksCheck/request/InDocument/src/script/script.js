class Client{

    constructor(url){
        this.url = url;
        this.table = document.getElementById("Tasks");
    }


    addLineToTable(item1, item2){
        const line = document.createElement("tr");

        const firstcolumn = document.createElement("th");
        firstcolumn.textContent = item1;

        const secondcolumn = document.createElement("th");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = item2; 


        secondcolumn.appendChild(input);


        line.appendChild(firstcolumn);
        line.appendChild(secondcolumn);

        this.table.appendChild(line);
    }

    async addToTable(taskToAdd){
        const response = await fetch(client.url);
        const tasks = await response.json();

        console.log(taskToAdd)
        if(!(taskToAdd in tasks)){
            console.log("not tasks in tasks")
            this.addLineToTable(taskToAdd, false);

        }


    }

    async addTask(){
        const taskToAdd = document.getElementById("taskToAdd").value;

        this.addToTable(taskToAdd);
        
        let data = {
            "task":taskToAdd,
            "finalize":false
        };

        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Corrigido
            },
            body: JSON.stringify(data) // Corrigido
        });

    }

    async removeTask(){
        let taskToRemove = document.getElementById("taskToRemove").value
        let data = {"remove": taskToRemove}
        console.log(data)
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Corrigido
            },
            body: JSON.stringify(data) // Corrigido
        });
    }


}

const client = new Client("http://127.0.0.1:8080/tasks");

async function initSite() {
    
    const response = await fetch(client.url);
    const tasks = await response.json();

    for(const i of Object.keys(tasks)){
        client.addLineToTable(i, tasks[i]);

    }
}
initSite()

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        console.log("Checkbox marcado!");
    } else {
        console.log("Checkbox desmarcado!");
    }
});