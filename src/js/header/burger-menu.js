import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { setTargetElement, getTargetElement, WINDOW_WIDTH_MD} from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
    'use strict'

    setTargetElement( 'body-lock' )
    toggleBurgerMenu()
} )

const toggleBurgerMenu = () => {
    const burgerMenu    = document.querySelector( '.header-wrapp' )
    const burgerButton  = document.querySelector( '.burger-button' )

        if ( ! burgerButton && ! burgerMenu ) return

        burgerButton.addEventListener( 'click', () => {
            if ( ! burgerMenu.classList.contains( 'opened') ) {
                burgerMenu.classList.add( 'opened')
            }    else {
                burgerMenu.classList.remove( 'opened')
            }
            if ( ! burgerButton.classList.contains( 'opened') ) {
                burgerButton.classList.add( 'opened' )
                disableBodyScroll( getTargetElement() )
            }   else {
                burgerButton.classList.remove( 'opened' )
                enableBodyScroll( getTargetElement() )
            }
        } )

    window.addEventListener( 'resize', () => {
        const windowWidth = window.innerWidth
        if ( windowWidth >= WINDOW_WIDTH_MD )
            burgerMenu.classList.remove( 'opened' )
    } )
}

