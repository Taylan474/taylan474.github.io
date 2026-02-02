const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

const deployPath = path.join(__dirname, "deploy-folder");

// clean deploy-folder
if (fs.existsSync(deployPath)) {
  fs.rmSync(deployPath, { recursive: true, force: true });
}
fs.mkdirSync(deployPath);

// copy Vite dist/
fse.copySync(path.join(__dirname, "dist"), deployPath);

// copy Flutter build
const flutterPath = path.join(__dirname, "../pomodoro-studying-app/build/web");
if (fs.existsSync(flutterPath)) {
  fse.copySync(flutterPath, path.join(deployPath, "pomodoro"));
  console.log("✅ Copied Flutter app to deploy-folder/pomodoro");
} else {
  console.warn("⚠️ Flutter build not found. Run `flutter build web` first.");
}
