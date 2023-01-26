## Teste/APP Solarpipe

App criado para aplicação de vaga.

## Fucionalidades

Login e persistencia do login.

- Login:
  - O login é feito utilizando a API disponibilizada. 
  - Usado o Axios para consumo da API
- Persistencia do login
  - Uma vez que o login é efetuado, os dados como token e uuid é armazenado no AsyncStorage.
  - Sempre que o app é executado, é verificado se existe algum dado no AsyncStorage, caso haja, é feito o redirecionamento para a tela Home, caso não haja, é redirecionado para o Login.
  - Assim que é verificado que existe dados no AsyncStorage, é feito a busca na API para consultar os dados do empregado logado. Caso não seja localizado, o mesmo é redirecionado para o funcão `signout`, onde é deslogado e removido os dados do AsyncStorage

### Observações

Foi utilizado o ContextAPI para melhor gerência dos dados e organização do código.