import axios from "axios";

const instance = axios.create({
  baseURL: "",
  method: "get",
  headers: { "X-API-Key": "" },
});

var config = {
    method: 'get',
    url: '',
    headers: { 
      'x-api-key': ''
    }
  };

export default {
  all() {
    return instance
      .get("channels/list")
      .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch(function (error) {
        if (error.response) {
          // A requisição foi feita e o servidor respondeu com um código de status
          // que sai do alcance de 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          // A requisição foi feita mas nenhuma resposta foi recebida
          // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
          // http.ClientRequest no node.js
          console.error(error.request);
        } else {
          // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
          console.error("Error", error.message);
        }
        console.error(error.config);
      });
  },
  all2() {
   return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
  }
};
