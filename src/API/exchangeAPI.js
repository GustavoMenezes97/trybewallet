const URL = 'https://economia.awesomeapi.com.br/json/all';

export default async function exchangesAPI() {
  const response = await fetch(URL);
  const data = await response.json();
  delete data.USDT; // mentoria com o Tiago Quadros no dia 02/08
  return data;
}
