# Tampermonkey: Youtube Quality Script

This project enables you to modify YouTube video quality, by using keyboard shortcuts.

## Installation

1. Install Tampermonkey extension for your browser [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2. Add the file as a Tampermonkey script

## Usage 

The following keyboard shortcuts are supported:

|Shortcut|Description
|-|-
|<kbd>[</kbd>|Reduces video quality, by one step
|<kbd>]</kbd>|Increases video quality, by one step
|<kbd>CTRL+[</kbd>|Sets video quality to lowest (Auto)
|<kbd>CTRL+]</kbd>|Sets video quality to highest (dependent on source video)

## Limitations

This has not been tested on mobile devices with Tampermonkey installed.
Firefox Nightly supports installing Tampermonkey as an add-on, but I haven't tested this specific script with it. 
In fact, this script most likely won't work, due to the major differences in YouTube's desktop and mobile web user interfaces.

