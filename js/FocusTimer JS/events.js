import state from './state.js';
import * as actions from './actions.js';
import * as el from './elements.js';
import * as timer from "./timer.js";
import { CONTROLS } from "./elements.js";

export function registerControls(){
    CONTROLS.addEventListener('click', (event) => {
        const ACTION = event.target.dataset.action;
        if(typeof actions[ACTION] != "function"){
            return;
        }

        actions[ACTION]();
    });
}

export function setMinutes(){
    el.MINUTES.addEventListener('focus', () => {
        el.MINUTES.textContent = "";
    });

    el.MINUTES.onkeypress = (event) => /\d/.test(event.key);

    el.MINUTES.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent;
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        timer.updateDisplay();

        el.MINUTES.removeAttribute('contenteditable');
    })
}