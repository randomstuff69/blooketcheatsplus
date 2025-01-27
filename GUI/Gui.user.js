// ==UserScript==
// @name         Blooket Cheats Plus
// @namespace    https://github.com/randomstuff69/blooketcheatsplus
// @version      15
// @description  Blooket Cheats Plus
// @author       DannyDan0167 and Cool Duck
// @match        *://*.blooket.com/*
// @icon         https://i.ibb.co/sWqBm0K/1024.png
// @grant        none
// @require     https://unpkg.com/idb-keyval@6.0.3/dist/umd.js
// ==/UserScript==

fetch('https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus/GUI/Gui.min.js').then(r=>r.text()).then(eval).catch(e=>console.error('Error:',e));
