'use strict'
const body = $('body')

//Components import
import bannerPrincipal from './components/bannerPrincipal'
import carrosselPrateleira from './components/carrosselPrateleira'
import botaoScroll from './components/botaoScroll'
import menuMobile from './components/menuMobile'

//Pages
if(body.hasClass('home-page')){
    bannerPrincipal.init()
}

if(body.hasClass('home-page')){
    carrosselPrateleira.init()
}

if(body.hasClass('home-page')){
    botaoScroll.init()
}

if(body.hasClass('home-page')){
    menuMobile.init()
}