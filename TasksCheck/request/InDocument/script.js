class Client{

    constructor(url){
        this.url = url;
    }

    async addTask(){
        const taskToAdd = document.getElementById("taskToAdd").value;
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

    async printTasks(){
        const response = await fetch(this.url);
        const tasks = JSON.stringify(await response.json());
        document.getElementById("tasks").innerText = tasks
    }
}

const client = new Client("http://127.0.0.1:8080/tasks");


