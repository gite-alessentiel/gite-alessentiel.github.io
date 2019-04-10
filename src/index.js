require('./styles/index.scss');

import PopperJs from 'popper.js';
import $ from 'jquery';
import bootstrap from "bootstrap";
import './js/calendar';

import initMap from './js/map';

const p = PopperJs;
const b = bootstrap;

window.initMap = initMap;

$("#contact").on("submit", function (event) {
    let form = event.target;
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
        return;
    }
    form.classList.add('was-validated');
    $.ajax({
        url: 'https://hooks.zapier.com/hooks/catch/4750212/73a6m3/',
        type: 'post',
        data: JSON.stringify(
            {
                "email": $("#email").val(),
                "phone": $("#phone").val(),
                "message": $("#message").val().replace(/\n/g, "<br>"),
                "name": $("#name").val()
            }
        )
    })
        .done(() => {
            alert("Le message a bien été envoyé")
        })
        .fail((error) => {
            alert("Impossible d'envoyer le message")
        });
})
