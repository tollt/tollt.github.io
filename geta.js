function getAge(){
    let url = 'https://api.agify.io?name='+document.getElementById('t').value.replace(/[^A-Za-z]/g,'');
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        if (out.age != null){
            document.getElementById('age').innerText = out.age;
        }else{
           document.getElementById('age').innerText = 'No data for name';
        }
    })
    .catch(err => { throw err});
}