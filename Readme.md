# MOBILE MEALS

Find your favourite Meals at a GO!🚗🍲

![Contributors](https://img.shields.io/badge/Contributors-1-blue?style=for-the-badge&logo=react?labelColor=red?color=blue?logo=react)

## Current limitations

| OS | Status |
| -- | -- |
| Android | Tested and working on Android 10 |
| iOS | Not yet compatible |


## Requirements

To install the following components, please follow the React Native guide for your platform

- Android >= 8.1
- Node >= 11.10.1
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- yarn (>1.16.0)
- React Native >= 0.61

## Development

### Read the docs

- [Contributing Guidelines](docs/CONTRIBUTING.md)
- [Git Basics](docs/git-basics.md)

### Environment setup

1. Follow the steps of the official [Expo Documentation](https://docs.expo.io/) to setup your development environment

#
### Debugging

#### On a physical device

- Shake the phone to display the development menu.

#### On the emulator

- Command + M will display the development menu.

#### Change the debugger port

1. Open the development menu
2. On "Dev Settings" change the "Debug server
host & port for device" to something like:
`localhost:8081`

## Run the app

### On Android

```bash
yarn start
```


## Testing

```bash
yarn test
```

## Packaging and Deployment

- Read the https://facebook.github.io/react-native/docs/signed-apk-android

The following command will generate the `apk` for Android.
```
cd android
./gradlew assembleRelease
```
{"mode":"full","isActive":false}