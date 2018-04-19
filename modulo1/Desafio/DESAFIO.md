# Desafio 01

Crie um novo projeto em NodeJS utilizando ExpressJS para criar o server e ouvir a portaCrie um novo projeto em NodeJS utilizando ExpressJS para criar o server e ouvir a porta 3000. Nesse projeto faça a configuração do ESLint e EditorConfig conforme apresentado nas aulas do módulo 01.

------------

Com essa aplicação setada, configure o seguinte:

##### Rotas

- GET / - Crie uma rota de tipo GET que apenas retorna a view MAIN (detalhes abaixo);

- POST /check - Rota do tipo POST chamada pelo formulário da view MAIN que checa se a idade do usuário é maior que 18, se sim, redireciona-o para a rota /major, caso contrário para a rota /minor (Utilize o `res.redirect` para redirecionar). Envie o nome do usuário por parâmetro GET (ex: /minor?nome=Diego)

- GET /major - Rota exibida caso usuário tiver mais de 18 anos que exibe a view MAJOR.

- GET /minor - Rota exibida caso usuário tiver menos de 18 anos que exibe a view MINOR.

##### Views

- main.njk - Crie uma view com nunjucks que tenha dois campos, nome e data de nascimento e um botão de submit. A data de nascimento deve ter o formato dia/mês/ano. Você não precisa estilizar a página podendo ter apenas HTML na view, sem CSS. O formulário dessa view deve enviar via método POST para a rota /check.

- major.njk - View exibida pela rota /major que tem apenas o seguinte conteúdo: Parabéns Diego, você tem mais que 18 anos (troque o nome pelo nome enviado pelo formulário).

- minor.njk - View exibida pela rota /minor que tem apenas o seguinte conteúdo: “Que pena Diego, você tem menos que 18 anos” (troque o nome pelo nome enviado pelo formulário).

##### Middleware

- Crie um middleware que será utilizado apenas nas rotas /major e /minor que checa se existem a informação de nome no parâmetro GET, ou seja, essas duas páginas não podem ser acessadas sem esse valor. Caso não tenha nome ou idade redirecione o usuário para a rota / com o formulário.

##### Dicas

- Você precisará calcular se o usuário possui mais de 18 anos baseado em sua data de nascimento, para isso você pode utilizar alguma biblioteca como o momentjs que é perfeita para trabalhar com datas no NodeJS:

```javascript
const DATA_NASCIMENTO = '07/12/1994';
const idade = moment().diff(moment(DATA_NASCIMENTO,
"DD/MM/YYYY"), 'years');
```