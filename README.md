# Tom Alexa skill example
Simple example of Alexa skill.

## Getting started
To start you need to configure AWS cli and your credentials on AWS see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html). You also need to have configured Alexa skill see [here](https://developer.amazon.com/alexa/console/ask).

After that, fill your Alexa skill id into serverless.yml to Alexa event in Alexa function (replace `amzn1.ask.skill.fde3..........` with your id).

Now you can run `npm run deploy:staging`.

 After that, log to your AWS console and copy your lambda id into your Alexa console (you need to open your skill and in Endpoint fill in your lambda id).
