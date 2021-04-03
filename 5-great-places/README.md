# Building Apps without Expo

## Expo - Managed Workflow

```bash
expo init project
```

## Expo Bare Workflow

```bash
# https://docs.expo.io/bare/hello-world/
expo init RNWithExpoBare

> minimal
```

## React Native CLI

```bash
# https://reactnative.dev/docs/environment-setup
npm install -g react-native-cli

react-native init project

npx react-native run-android
```

# Publish & Build

## Expo

- https://docs.expo.io/distribution/building-standalone-apps/?redirected
- https://docs.expo.io/guides/splash-screens/
- https://docs.expo.io/distribution/uploading-apps/#creating-a-google-service-account

```bash
expo publish

# android
expo build:android -t app-bundle

# ios
expo build:ios

expo fetch:android:keystore
```
