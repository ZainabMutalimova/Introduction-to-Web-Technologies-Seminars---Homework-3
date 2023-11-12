

function send() {
    //ввод данных из поля ввода html input
    //let x = prompt("Введите х")

    let message = document.getElementById('message').value;
    let name = document.getElementById('name').value;



    //логика

    if (message == '') {
        alert("Нужно ввести сообщение")
    }

    //Вывод данных в поле 
    else {
        document.getElementById('result').innerText = name + ": " + message;
        document.getElementById('message').value = '';
    }

    //document.getElementById('result').value = message;
    //alert(`${x} * 5 = ${resuls}`)

}


