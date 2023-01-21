const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //le puse .
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  
  $n.textContent = 'cargando...';
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //agregué variable data y su valor.
  console.log(response);
  $n.textContent = `${data.name}`; //uso de backticks 
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  } catch (error) {
    throw new Error ('Error');
  }

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);