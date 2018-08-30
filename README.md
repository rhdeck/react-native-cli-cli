# react-native-cli-cli

Easily create command-line extensions for React Native.

Have you ever wished you could automate some aspect of your initialization or build process? React Native can make that easy via the plugin and link event subsystems. This package makes it even easier to spin up extensions that let you leverage those functionalities.

# Example

```bash
yarn global add react-native-cli-cli
react-native-cli init react-native-mytestextension
react-native init mytestapp
cd mytestapp
yarn add ../react-native-mytestextension
react-native --help
# See the added "mytestextension" options?
react-native mytestextension
# See the results?
react-native link
# See the prelink and postlink events fire?
cd ../react-native-mytestextension
code .
# Now make them do something useful for your projects!
```

# Installation

```bash
yarn global add react-native-cli-cli
# or
npm i g react-native-cli-cli
```

# Usage

```
react-native-cli init <myproject>
```

**Note** In order to extend the `react-native` command list, your project name should start with `react-native`. This is not required for hooking the prelink and postlink events.

# Using your extension

```
cd mytestapp
react-native myproject -a argument
# and off you go!
```

# How to extend RN

The [RNPM repository README](https://github.com/rnpm/rnpm) contains excellent descriptions on how to extend via plugins and the link events.
