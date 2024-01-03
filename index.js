const dateNew = new Date();
const dayWeek = [7, 1, 2, 3, 4, 5, 6][dateNew.getDay()]; // Дни недели с Воскресенья по Субботу

module.exports.handler = async (event, context) => {
  const { version, session, request } = event;

  let text = `Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Этот навык создан, чтобы поддерживать тебя и вдохновлять каждый день. Если у тебя есть предложения по его улучшению, не стесняйся делиться своим мнением в отзывах! Для начала работы навыка скажите "Начать"`; // Начальный текст

  let tts =
    "Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Этот навык создан, чтобы поддерживать тебя и вдохновлять каждый день. Если у тебя есть предложения по его улучшению, не стесняйся делиться своим мнением в отзывах! Для начала работы навыка скажите Начать";

  let end_session = false;

  if (request["command"] === "начать") {
    if (dayWeek === 7) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/618b7ab4-29ba-4fc3-8418-3ec72aa7cd7a.opus">';
     text='Слушайте внимательно'
        end_session = true;
    }
    if (dayWeek === 1) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/fb634948-da72-488e-9381-bc183b782dc9.opus">';
        text='Слушайте внимательно'
        end_session = true;
    }
    if (dayWeek === 2) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/a02293a1-fa44-4ad3-8d21-434d108d8d0a.opus">';
        text='Слушайте внимательно'
        end_session = true;
    }
    if (dayWeek === 3) {
      tts = `<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/dcac1242-31ae-4646-8787-2e6d073c3c0a.opus">`;
      text='Слушайте внимательно'
      end_session = true;
    }
    if (dayWeek === 4) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/4b81063a-058e-4cac-8a96-9ad2afc2d108.opus">';
        text='Слушайте внимательно'
        end_session = true;
    }
    if (dayWeek === 5) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/c5d7dbab-d8f7-4a33-bb96-60eb4d83d31e.opus">';
        text='Слушайте внимательно'
        end_session = true;
    }
    if (dayWeek === 6) {
      tts =
        '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/d9ebc84e-0eb0-47fe-ac4f-e21717772bad.opus">';
        text='Слушайте внимательно'
        end_session = true;
    }
  }

  return {
    // Отправка на сервер
    version,
    session,
    response: {
      text: text,
      tts: tts,
      end_session: end_session, // ( если true диолог закончитаься, false продолжиться )
    },
  };
};