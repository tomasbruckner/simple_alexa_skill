
const alexa = require('ask-sdk-core');

const welcomeIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'WelcomeIntent';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the best presentation ever!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Welcome', speechText)
      .getResponse();
  },
};

const goodByeIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GoodByeIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hope you enjoyed the presentation. See you later alligator!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Good bye', speechText)
      .getResponse();
  },
};

const helpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Are you lost little boy? Nobody can help you now.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Need help?', speechText)
      .getResponse();
  },
};

const cancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Don\' tell me what to do! I do what I want.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Bye', speechText)
      .getResponse();
  },
};

const sessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const errorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    welcomeIntentHandler,
    goodByeIntentHandler,
    helpIntentHandler,
    cancelAndStopIntentHandler,
    sessionEndedRequestHandler,
  )
  .addErrorHandlers(errorHandler)
  .lambda();
