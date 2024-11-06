
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }

    async removeTask(){
        let taskToRemove = document.getElementById("taskToRemove").value;
        let data = {"remove": taskToRemove};
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data)
        });
    }

    async printTasks(){
        const response = await fetch(this.url);
        const tasks = JSON.stringify(await response.json());
        console.log(tasks)
    }
}

const client = new Client("http://127.0.0.1:8080/tasks");

