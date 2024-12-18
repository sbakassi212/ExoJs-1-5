fetch('data.json')
    .then(res => res.json())
    .then(data => document.getElementById('contenu-json').innerText = JSON.stringify(data))
    .catch(console.error);
