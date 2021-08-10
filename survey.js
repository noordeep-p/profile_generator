const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("what's your name? Nicknames are also acceptable :)\n", (answer) => {
  let name;
  name = answer;
  rl.question("what's an activity you like doing?\n", (answer) => {
    let activity;
    activity = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      let music;
      music = answer;
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)\n', (answer) => {
        let meal;
        meal = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          let food;
          food = answer;
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            let sport;
            sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              let superpower;
              superpower = answer;
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});