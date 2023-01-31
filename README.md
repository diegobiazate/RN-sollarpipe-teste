## Teste/APP Solarpipe

App criado para aplicação de vaga. Aplicação criada utilizando:

- Expo
- Typescript
- react-navigation
- nativewind
- expo-linear-gradient
- expo-font
- axios

## Instruções

Ao clonar o projeto, rodar o comando `npm install` para instalação de todas as dependências.

Após instalar as dependências, é necessário alterar o arquivo `axios.ts` que está no diretório `src/lib/axios.ts`.

```
  Deve-se alterar o baseURL:

  export const api = axios.create({
    baseURL: 'http://IP_DA_MAQUINA:3000',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  Onde está o nome IP_DA_MAQUINA é necessário alterar para o IP da máquina onde o servidor está rodando.
```

Após realizar a alteração, pode-se executar algum dos seguintes comandos:

```
npx expo start - /* Este comando irá executar o servidor do expo */

npm run start  - /*Este comando irá executar o comando "expo start", ou seja, irá iniciar o servidor do expo*/

npm run android  - /*Este comando irá executar o comando "expo start --android", ou seja, irá executar o app no emulador android disponível*/

npm run ios -  /* Este comando irá executar o comando "expo start --ios", ou seja, irá executar o app no emulador ios disponível -- somente no MAC*/

```

Com o servidor do expo rodando, é possível rodar no seu dispositivo mobile, usando o app [Expo Go](https://expo.dev/client).

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