import axios from 'axios';

export async function getSurvivorData() {
  let user = null;
  let activity = 'Atividade desconhecida... 🧟';
  let dica = 'Chuck Norris está em missão... tente novamente. 🥋';
  let inventario = ['Mãos nuas e coragem']; // fallback

  try {
    const userRes = await axios.get('https://randomuser.me/api/');
    user = userRes.data.results[0];
  } catch (err) {
    throw new Error('Erro ao buscar sobrevivente.');
  }

  try {
    const activityRes = await axios.get('https://bored-api.appbrewery.com/random');
    activity = activityRes.data.activity;
  } catch (err) {
    console.warn('Atividade indisponível no momento.');
  }

  try {
    const chuckRes = await axios.get('https://api.chucknorris.io/jokes/random');
    dica = chuckRes.data.value;
  } catch (err) {
    console.warn('Chuck Norris está ocupado.');
  }

  try {
    const dndRes = await axios.get('https://www.dnd5eapi.co/api/equipment');
    const allItems = dndRes.data.results;

    // Embaralhar itens e pegar os primeiros 4
    const itensAleatorios = allItems
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
      .map(item => item.name);

    inventario = itensAleatorios;
  } catch (err) {
    console.warn('Inventário indisponível no momento.');
  }

  return {
    nome: `${user.name.first} ${user.name.last}`,
    idade: user.dob.age,
    pais: user.location.country,
    imagem: user.picture.large,
    atividade: activity,
    dica: dica,
    inventario: inventario
  };
}
