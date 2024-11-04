import requests

def pegar_numero():
    url = 'http://127.0.0.1:5000/api/pessoas'
    dados = {
        "task": input(),
        "finalize": False
    }

    requests.post(url, json=dados)


def mostrar_numero():
    url= 'http://127.0.0.1:5000/api/pessoas'
    resposta = requests.get(url)
    print(resposta.json())

def main():
    escolha = int(input())
    if escolha == 1:
        pegar_numero()
    else:
        mostrar_numero()


if __name__ == '__main__':
    main()
