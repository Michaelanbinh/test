$( document ).ready(function() {
    const idUser = localStorage.getItem('idUser');
    const pwUser = localStorage.getItem('pwuser');

    if(!idUser || !pwUser) {
        window.location.href = 'index.html';
        return;
    }

    let isMatched = checkAuthen(idUser, pwUser);
    if(!isMatched) {
        window.location.href = 'index.html';
        return;
    }

    let message = '';
    for(congrateMessage of congrateMessages) {
        if(congrateMessage.id = idUser) {
            message = congrateMessage.message;
        }
    }

    if(message.length <= 0 ) {
        window.location.href = 'index.html';
    }

    const textElement = document.createElement("h1");
    textElement.setAttribute("class","reveal-text");
    textElement.textContent = message;
    $('.wrapper-text')[0].append(textElement);
});