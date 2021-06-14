const socket = io();

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerText = text;
    document.getElementById('ul').appendChild(el)

});

function oncl() {
    const txt = document.getElementById('nme').value
    socket.emit('naming', txt)
    document.getElementById('nme').hidden = 'true'
    document.getElementById('but').hidden = 'true'
    document.getElementById('input').hidden = false
    document.getElementById('button').hidden = false
    document.getElementById('ul').hidden = false
}
document.getElementById('button').onclick = () => {

    const text = document.getElementById('input').value;
    socket.emit('message', text)
    
}

