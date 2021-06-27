
# Frontend OpenCircle

Frontend da aplicação para gerenciar usuários.


## Principais tecnologias


**Server:**  
- ReactJS 
- TypeScript
- axios
- styled-components
- react-toastify
- eslint
- prettier

  
## Quer rodar localmente?

Faz um clone do projeto

```bash
  git clone git@github.com:omateusamaral/frontend-open-circle.git
```

Abre o projeto no seu terminal e rode o  seguinte comando para instalar as dependências

```bash
  yarn
```
ou

```bash
  npm install
```

**caso você queria rodar com seu banco dados local siga as etapas abaixo, caso não queria pode ignorar**

no arquivo index.ts dentro da pastar **src/services/** está utilizando o a api de produção

porém você mudar isso passando pro baseURL seu localhost

```bash
baseURL:'http://localhost:<sua rota que você colocou>/users'
```

pronto apenas isso.

## 

agora no seu terminal rode o comando 


```bash
yarn start
```

ou
```bash
npm run  start
```

feito isso vai abrir no seu browser a aplicação e você testa-la a vontade.

**lembrando que seu servidor também deve estar rodando**









  
## Screenshots

![Captura de tela de 2021-06-27 18-48-59](https://user-images.githubusercontent.com/37390930/123560437-7988fc00-d778-11eb-8718-964e7a9986df.png)

![Captura de tela de 2021-06-27 18-49-07](https://user-images.githubusercontent.com/37390930/123560441-7d1c8300-d778-11eb-9f61-488948c40a66.png)

![Captura de tela de 2021-06-27 18-49-19](https://user-images.githubusercontent.com/37390930/123560442-7f7edd00-d778-11eb-9932-23f1c316ce89.png)
  
## Desafios e aprendizagens

O principal desafio foi configurar a questão typescript 

passei maior tempo pesquisando sobre as tipagens de derterminadas tags html do que programando

seja no youtube, StackOverFlow e outros sites.


utilizei as tecnologias que conheço e utilizei também em projetos que tenho no meu git
e vídeos do youtube ou de cursos que tenho.

tentei focar mais no bruto do que na perfumaria, então a estilização não é uma das melhores rs 

tentei tbm usar redux porém não consegui (percebi que preciso estudar muito mais ele 🤯🤯) 

## deploy 

tentei deploy pelo gitgub pages e  heroku porémo único que deu certo foi na vercel que já tinha 
usado como lugar para fazer deploy em outra aplicação, mas deu um problema.


o deploy foi o meu segundo desafio pois estava com um erro que nunca tinha acontecido comigo

da tela ficar em branco após o deploy e para resolver fiquei bastante tempo pesquisando até que achei 

essa [solução](https://stackoverflow.com/questions/55568697/blank-page-after-running-build-on-create-react-app) só precisa passar uma única linha 😂😂😂 



  
## Autor

- [@mateusamaral](https://www.linkedin.com/in/mateus-passos-amaral/)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  