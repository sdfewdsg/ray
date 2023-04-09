// const port = process.env.PORT || 4433;
const port = 4433;
const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`, {
  cwd: "./",
});
