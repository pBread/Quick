const dotenv = require("dotenv");
const twilio = require("twilio");

dotenv.config();

const { ACCOUNT_SID, AUTH_TOKEN } = process.env;
const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const CONVO_SID = "";

(async () => {
  const conversation = await client.conversations
    .conversations(CONVO_SID)
    .fetch();

  const participants = await client.conversations
    .conversations(CONVO_SID)
    .participants.list();

  const messages = await client.conversations
    .conversations(CONVO_SID)
    .messages.list();

  console.log({ conversation, participants, messages });
})();
