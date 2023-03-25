const url = 'ws://133.32.218.21:3000/'
const protocol = 'game_server'
const socket = new WebSocket(url, protocol)

let request_value = {};

const target = document.getElementById('next');
const ele1 = document.getElementById('name');
const ele2 = document.getElementById('room_number');
const div = document.getElementById('set');

target.addEventListener('click', () => {
    if (ele1.value === '' || ele2.value === '' || ele1.value === '' && ele2.value === '') {
        alert('入力されていない所があります')
    }
    if (ele1.value.length > 20) {
        alert('名前は20文字以内にしてください。')
    }
    if (ele2.value.length > 10) {
        alert('パスワードは10文字以内にしてください。')
    } else {
        request_value.name = ele1.value;
        request_value.room_number = ele2.value;
        document.getElementById('text1').remove();
        document.getElementById('text2').remove();
        ele1.remove();
        ele2.remove();
        document.getElementById('next').remove();
        div.id = "wait";

        request()
    }
})

function request() {
    socket.send(`\nplayer_name​​​​​​​​​​:${request_value['name']}\npassword​​​:${request_value['room_number']}`)
}
