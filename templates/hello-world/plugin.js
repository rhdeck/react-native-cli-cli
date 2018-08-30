module.exports = [
  {
    name: "{{command}}",
    description: "Demontration of a command without an argument",
    options: [
      {
        command: "-d --demo",
        description: "Demontration switch without argument"
      },
      {
        command: "-a --argument [argument]",
        description: "Demontration of switch with argument"
      }
    ],
    func: (argv, args, options) => {
      console.log("Running the command {{command}}");
      if (options.demo) console.log("You selected the demo argument");
      if (options.argument)
        console.log(
          "You selected the argument argument with argument",
          options.argument
        );
    }
  },
  {
    name: "{{command}}-require-arg <argument>",
    description: "Demonstration of a command that requires an argument",
    options: [
      {
        command: "-d --demo",
        description: "Demontration switch without argument"
      },
      {
        command: "-a --argument [argument]",
        description: "Demontration of switch with argument"
      }
    ],
    func: (argv, args, options) => {
      console.log(
        "Running command {{command}}-require-arg with argument ",
        argv[0]
      );
      if (options.demo) console.log("You selected the demo argument");
      if (options.argument)
        console.log(
          "You selected the argument argument with argument",
          options.argument
        );
    }
  },
  {
    name: "{{command}}-optional-arg [argument]",
    description:
      "Demonstration of a command that can take an argument but does not require it",
    options: [
      {
        command: "-d --demo",
        description: "Demontration switch without argument"
      },
      {
        command: "-a --argument [argument]",
        description: "Demontration of switch with argument"
      }
    ],
    func: (argv, args, options) => {
      if (argv && argv[0])
        console.log(
          "Running command {{command}}-optional-arg with argument ",
          argv[0]
        );
      else
        console.log(
          "Running command {{command}}-optional-arg without arguments"
        );
      if (options.demo) console.log("You selected the demo argument");
      if (options.argument)
        console.log(
          "You selected the argument argument with argument",
          options.argument
        );
    }
  }
];
