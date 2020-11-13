const path = require("path");
const fs = require("fs");

const envVarPrefix = "CONFETTI_";

function write(envVars = {}) {
    try {
        const envFileLines = [];
        for (const [key, value] of Object.entries(envVars)) {
            if (!key.startsWith(envVarPrefix)) continue;
            envFileLines.push(`\t${key}: "${value}",\n`);
        }

        const envValues = `window.confettiEnv = {
${envFileLines.join("").trimEnd()}
};
`;
        const envFilePath = path.resolve(path.join(process.cwd(), "/public/env.js"));
        fs.writeFileSync(envFilePath, envValues);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

if (process.env.NODE_ENV === "production") {
    write(process.env);
} else {
    let envVars = require("dotenv").config().parsed;
    envVars = {
        ...envVars,
        ...process.env,
    };
    write(envVars);
}
