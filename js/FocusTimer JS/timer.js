import state from './state.js';
import * as el from './elements.js';
import { reset } from './actions.js';
import { KITCHEN_TIMER } from './sounds.js';

export function countDown(){
    clearTimeout(state.countDownId);

    if(!state.isRunning){
        return;
    }

    let minutes = Number(el.MINUTES.textContent);
    let seconds = Number(el.SECONDS.textContent);

    seconds--;

    if( seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0){
        reset();
        KITCHEN_TIMER.play();
        return;
    }

    updateDisplay(minutes, seconds);

    // setTimeout: Função do JS para executar uma outra função após um determinado período de tempo
    state.countDownId = setTimeout(() => countDown(), 1000);
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes; // O '??' verifica se a variável é nula, caso seja atribui-se o valor após o operador (nullish coalescing)
    seconds = seconds ?? state.seconds;

    el.MINUTES.textContent = String(minutes).padStart(2, "0");
    el.SECONDS.textContent = String(seconds).padStart(2, "0");
}