const getPlanetData = (id) => {
  const url = `https://api.le-systeme-solaire.net/rest/bodies/${id}`
  return fetch(url)
    .then(res => res.json()) 
    .catch((error) => console.log(error));
}

export default getPlanetData
