const core = require('@actions/core');

try {
    const envFile = core.getInput('env_file_content');
    const buf = Buffer.from(envFile, 'base64');

    fs.writeFile('./.env', buf.toString(), function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('write success.');
        }
    });
} catch (error) {
    core.setFailed(error.message);
}