require('./styles/index.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';
import bootstrap from "bootstrap";

import './js/calendar';
import initMap from './js/map';


window.initMap = initMap;


jquery(()=>{
    console.log('Hello jQuery + bootstrap 4!');
});

