const mail = require('./js-email');
const config = require('./back-end');

async function main() {
    let info = await mail.send({
      from: '"Fred Foo 👻"',
      to: "interferstd@yandex.ru",
      subject: "Hello ✔",
      text: "Hello world? This is first way!",
      html: "<b>Hello world?</b>"
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log(info);
  }
  
  main().catch(console.error);