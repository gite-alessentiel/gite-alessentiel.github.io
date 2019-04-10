require('./styles/index.scss');

import jquery from 'jquery';

import './js/calendar';
import initMap from './js/map';


window.initMap = initMap;

jquery("#contact").on("submit", function (event) {
    let form = event.target;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    form.classList.add('was-validated');
    jquery.ajax({
        url: 'https://api.gite-alessentiel.fr/hooks/catch/4750212/73a6m3/',
        type: 'post',
        data: JSON.stringify(
            {
                "email": jquery("#email").val(),
                "phone": jquery("#phone").val(),
                "message": jquery("#message").val(),
                "name": jquery("#name").val()
            }
        )
        success
:

    function () {
        alert("prout")
    }
})
})
