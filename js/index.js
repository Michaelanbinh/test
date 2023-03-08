function throwError(isThrow) {
    $('#error-field').css('display', isThrow ? 'block' : 'none');
}

function displayDialog(isDisplay) {
    $('.blur-background').css('display', isDisplay ?'block' : 'none');
    $('.overlay').css('display', isDisplay ?'block' : 'none');
}

$( document ).ready(function() {
    localStorage.clear();

    $('.btn-user').click(function( event ) {
        $('#pwuser').val('');

        if($("#idUser").length) {
            $("#idUser").remove();
        }

        const id = event.currentTarget.getAttribute('data-id');

        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("id", "idUser");
        input.setAttribute("name", "idUser");
        input.setAttribute("value", id);

        $('#login-form')[0].append(input);

        const nameUser = event.currentTarget.querySelector('span').innerText;
        $('#title-dialog').text(nameUser.trim());

        displayDialog(true);
    })

    $('.blur-background').click(function( event ) {
        displayDialog(false);
        throwError(false);
    })

    $('#login-form').on('submit', function( event ) {
        event.preventDefault();
        
        const idUser = $('#idUser').val();
        const pwUser = $('#pwuser').val();

        if(!idUser || !pwUser) {
            throwError(true);
            return;
        }

        let isMatched = checkAuthen(idUser, pwUser);
        if(!isMatched) {
            throwError(true);
            return;
        }

        //Handle stored data local storage
        localStorage.setItem('idUser', idUser);
        localStorage.setItem('pwuser', pwUser);

        //Load next page
        console.log('Loading next page');
        window.location.href = 'congratulation.html';
    })
});