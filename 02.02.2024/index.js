let speaker = [
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/618b7ab4-29ba-4fc3-8418-3ec72aa7cd7a.opus">',
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/fb634948-da72-488e-9381-bc183b782dc9.opus">',
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/a02293a1-fa44-4ad3-8d21-434d108d8d0a.opus">',
  `<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/dcac1242-31ae-4646-8787-2e6d073c3c0a.opus">`,
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/4b81063a-058e-4cac-8a96-9ad2afc2d108.opus">',
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/c5d7dbab-d8f7-4a33-bb96-60eb4d83d31e.opus">',
  '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/d9ebc84e-0eb0-47fe-ac4f-e21717772bad.opus">',
]

module.exports.handler = async (event, context) => {
  const { version, session, request } = event;


  let randomSpeaker = speaker[Math.floor(Math.random() * speaker.length)];



  let text = `Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Этот навык создан, чтобы поддерживать тебя и вдохновлять каждый день. Для начала работы навыка скажите "Начать". Следующую мотивационную звукозапись вы сможете прослушать по команде "Продолжи"`; // Начальный текст

  let tts =
    "Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Этот навык создан, чтобы поддерживать тебя и вдохновлять каждый день. Для начала работы навыка скажите Начать. Следующую мотивационную звукозапись вы сможете прослушать по команде Продолжи";

  if (request["command"] === "начать") {
      tts = randomSpeaker
     text='Слушайте внимательно'
  }

  if (request["command"] === "продолжи") {
    tts = randomSpeaker
   text='Слушайте внимательно'
}

  return {
    // Отправка на сервер
    version,
    session,
    response: {
      text: text,
      tts: tts,
      end_session: false, // ( если true диолог закончитаься, false продолжиться )
    },
  };
};