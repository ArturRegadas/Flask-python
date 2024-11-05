from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

tasksInfo = {}


@app.route('/tasks', methods=['POST'])
def addTask():
    data = request.json
    task = data.get('task')
    state = data.get('finalize')
    remove = data.get("remove")

    
    if task:
        tasksInfo[task] = state
        return jsonify(tasksInfo)
    
    elif remove in tasksInfo:
        tasksInfo.pop(remove)
        return jsonify(tasksInfo)
    
    return jsonify({'error': 'Dados inválidos'})



@app.route('/tasks', methods=['GET'])
def listTasks():
    return jsonify(tasksInfo) 

if __name__ == '__main__':
    app.run(debug=True, port=8080)
