import { Options, requestAPI } from "../api"

export const getCep = (cep: string) => {
  const options: Options = {
    url: `https://viacep.com.br/ws/${cep}/json/`,
    method: 'GET'
  }

  return requestAPI(options);
}
