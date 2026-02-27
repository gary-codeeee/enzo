const { execSync } = require('child_process');
try {
    execSync('npx tailwindcss -i ./src/index.css -o ./src/output.css', { encoding: 'utf8', stdio: 'pipe' });
    console.log("Success");
} catch (err) {
    console.log(err.stderr || err.stdout || err.message);
}
