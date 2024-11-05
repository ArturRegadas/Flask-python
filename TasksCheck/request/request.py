import requests

class client:
    def __init__(self, url:int) -> None:
        self.url = url
        try:
            requests.get(url)
        except:
            print("The server is OFFLINE")


    def sendData(self, data:dict) -> None:
        requests.post(self.url, json=data)

    def printData(self):
        response = requests.get(self.url)
        print(response.json())

def main():
    currentClient = client("http://127.0.0.1:8080/tasks")
    choice  = input("add[a] / [p]print: ")
    if choice == 'p' :
        currentClient.printData()
    elif choice == 'a':
        currentClient.sendData({"task": input("task to add") , "finalize":False})
    else:
        print("error")

if __name__ == '__main__':
    main()
