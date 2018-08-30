#!/usr/bin/env node
const moustache = require("moustache");
const commander = require("commander");
const fs = require("fs");
const Path = require("path");
commander
  .command("init [arg]")
  .description("Create new React-Native CLI extension")
  .action(argv => {
    console.log("Running init on", argv);
    const basePath = Path.join(process.cwd(), argv);
    if (fs.existsSync(basePath)) {
      console.log("The path ", basePath, "already exists. Aborting.");
      process.exit();
    }
    if (argv.indexOf("react-native-") !== 0) {
      console.log(
        'Note: Because this name does not start with "react-native-" this package will support prelink and postlink events, but not extend the react-native command menu'
      );
    }
    fs.mkdirSync(basePath);
    //Iterate over my templates
    const sourcePath = Path.join(__dirname, "templates", "hello-world");
    const files = fs.readdirSync(sourcePath);
    const replacements = {
      packagename: argv,
      command: (name =>
        name.indexOf("react-native-") === 0
          ? name.substring("react-native-".length, name.length)
          : name)(argv),
      author: "",
      license: ""
    };
    files.forEach(file => {
      const sourceFilePath = Path.join(sourcePath, file);
      const targetFilePath = Path.join(basePath, file);
      const content = fs.readFileSync(sourceFilePath, { encoding: "utf8" });
      const out = moustache.render(content, replacements);
      fs.writeFileSync(targetFilePath, out);
    });
    console.log("Command", argv, "created in ", basePath);
    process.exit();
  });
commander.parse(process.argv);
if (!process.argv) commander.outputHelp();
else if (!commander.commandExecuted) {
  console.log(
    'No command identified! Did you mean to use "react-native-cli init ' +
      process.argv.slice(2).join(" ") +
      '"?'
  );
}
