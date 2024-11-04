from flask import Flask, request, jsonify

app = Flask(__name__)

response = {}


@app.route('/api/pessoas', methods=['POST'])
def adicionar_pessoa():
    dados = request.json
    task = dados.get('task')
    state = dados.get('finalize')

    if task:
        response[task] = state
        return jsonify(response)
    return jsonify({'error': 'Dados inválidos'})

@app.route('/api/pessoas', methods=['GET'])
def listar_pessoas():
    return jsonify(response) 

if __name__ == '__main__':
    app.run(debug=True)
