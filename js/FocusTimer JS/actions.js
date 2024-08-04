import state from "./state.js";
import * as timer from './timer.js';
import * as el from './elements.js';
import * as sounds from './sounds.js';

export function toggleRunning(){
    // A função toggle() retorna por padrão um booleano, caso ela remova um elemento, esta retorna false, caso insira, retorna true
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countDown();
    sounds.BUTTON_PRESS_AUDIO.play();
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.BUTTON_PRESS_AUDIO.play();
}

export function set(){
    el.MINUTES.setAttribute('contenteditable', true);
    el.MINUTES.focus();
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute){
        sounds.BG_AUDIO.play();
        return;
    }

    sounds.BG_AUDIO.pause();
}