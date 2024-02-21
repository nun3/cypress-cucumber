# language: pt

Funcionalidade: Tela Login

  Cenário: Acessar tala inicial
    Dado que acessei a url padrão
    E preenchi o CPF
    E preenchi a Senha
    Quando clico no botão Entrar
    E verifico a pagina inicial
    Então o login foi realizado com sucesso
