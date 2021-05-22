function getAge(){
    let url = 'https://api.agify.io?name='+document.getElementById('t').value.replace(/[^A-Za-z]/g,'');
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        document.getElementById('age').innerText = out.age
    })
    .catch(err => { throw err});
}