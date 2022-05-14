// ==UserScript==
// @name         Modify YouTube Video Quality With Keyboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Enables users of YouTube to alter video quality settings with the keyboard.
// @author       Trevor Sullivan
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Loading YouTube Quality management script');
    let keyHandler = function (event) {
        console.log(event);

        // If a non-valid key is pressed, reject any operations
        let acceptedKeys = ['BracketLeft', 'BracketRight'];
        if (!(acceptedKeys.includes(event.code))) { console.log('No valid key pressed. Doing nothing.'); return; }

        // Open Settings Menu
        let settingsButton = document.querySelector('button.ytp-settings-button');
        settingsButton.click();

        // Open the Quality sub-menu
        let qualityButton = document.evaluate('//div[@class="ytp-menuitem-label" and contains(., "Quality")]', document).iterateNext();
        qualityButton.click();

        // Which quality setting is currently checked / enabled?
        let qualityMenu = document.querySelector('.ytp-quality-menu>.ytp-panel-menu');

        // Find quality options that are available
        let qualityOptions = Array.from(qualityMenu.childNodes);
        let currentQuality = qualityOptions.filter(item => item.ariaChecked)[0];
        let currentIndex = qualityOptions.indexOf(currentQuality);
        console.log(`Current YouTube quality is: ${currentQuality.innerText}`);
        console.log(`Index of current quality item is: ${currentIndex}, and total # of options is: ${qualityOptions.length} (-1, because arrays are zero-based)`);

        // Select highest quality option, if user presses CTRL + ]
        if (event.code == 'BracketRight' && event.ctrlKey) {
          console.log('Selecting the highest quality video option');
          qualityOptions[0].click();
          return;
        }

        // Select lowest quality option, if user presses CTRL + [
        if (event.code == 'BracketLeft' && event.ctrlKey) {
          console.log('Selecting the lowest quality video option');
          qualityOptions[qualityOptions.length-1].click();
          return;
        }

        if (event.code == 'BracketLeft') {
          console.log('Selecting next lower quality option');
          if (currentIndex < qualityOptions.length-1) {
            qualityOptions[currentIndex+1].click();
          }
          else { currentQuality.click(); }
        }

        if (event.code == 'BracketRight') {
          console.log('Selecting next higher quality option');
          if (currentIndex > 0) {
            let nextOption = qualityOptions[currentIndex-1];
            console.log(nextOption);
            setTimeout
            nextOption.click();
          }
          else {
            // Just click the currently selected option
            currentQuality.click();
          }
        }
    };
    // Register the keyboard event handler
    document.addEventListener('keydown', keyHandler);
})();
