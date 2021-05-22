function getAge(){
    let url = 'https://api.agify.io?name='+document.getElementById('t').value.replace(/[^A-Za-z]/g,'');
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then((out) => {
        if (out.age != null){
            document.getElementById('age').innerText = out.age + ' is the average age of people named '+document.getElementById('t').value.replace(/[^A-Za-z]/g,'');
        }else{
            document.getElementById('age').innerText = 'No data for name';
        }
        if (out.count != null){
            document.getElementById('count').innerText = out.count + ' people named '+document.getElementById('t').value.replace(/[^A-Za-z]/g,'');
        }else{
            document.getElementById('count'),innerText = 'No data for name'
        }
    })
    .catch(err => { throw err});
}