# PS VExpenses

Projeto de agenda de contatos realizado para o processo seletivo da VExpenses

## Start

Para rodar o projeto em desenvolvimento:

```bash
  yarn dev
  yarn db
```

O `yarn db` é responsável por rodar o json-server (fake api)

## Informações importantes

Para a primeira utilização rodar `yarn`.
O projeto está com um `settimeout` setado de dois segundos em cada requisição, para simular um loading.

## Pacotes utilizados

- [redux-toolkit](https://redux-toolkit.js.org/)
- [react-hook-form](https://react-hook-form.com/) + [yup](https://github.com/jquense/yup)
- [json-server](https://github.com/typicode/json-server)
- [react-input-mask](https://github.com/sanniassin/react-input-mask)
- [styled-components](https://styled-components.com/)
- [axios](https://axios-http.com/ptbr/docs/intro)

## API

- [via-cep](https://viacep.com.br/)
