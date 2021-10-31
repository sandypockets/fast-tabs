# Fast Tabs
A simple Chrome extension made with React. Open three websites at once. Choose whether the tabs should open as pinned tabs, and change the URLs anytime in the settings.

![Extension popup home](https://github.com/sandypockets/fast-tabs/blob/main/docs/screenshot-home.png?raw=true)
![Settings](https://github.com/sandypockets/fast-tabs/blob/main/docs/screenshot-settings.png?raw=true)
![Link Group Settings](https://github.com/sandypockets/fast-tabs/blob/main/docs/screenshot-groupsettings.png?raw=true)

## Chrome permissions
* Storage: to save your chosen URLs to your device
* Background: to run a background script (`public/background.js`) responsible for changing settings and opening tabs.

## Getting started
This project was developed and tested with `Node 14.17.0` and `yarn 1.22.15`.

1. Clone the repository.
2. Install dependencies by running:
```shell
yarn install
```
3. Build the extension by running:
```shell
yarn build
```
4. In your browser, go to `chrome://extensions/` and enable developer mode.
> Click the Chrome menu icon and select Extensions from the Tools menu. Ensure that the "Developer mode" checkbox in the top right-hand corner is checked.
5. Click **Load unpacked**.
6. Upload the `build/` directory within the project.

## Dependencies
* @testing-library/jest-dom `^5.11.4`
* @testing-library/react `^11.1.0`
* @testing-library/user-event `^12.1.10`
* react `^17.0.2`
* react-dom `^17.0.2`
* react-scripts `"4.0.3`
* web-vitals `^1.0.`