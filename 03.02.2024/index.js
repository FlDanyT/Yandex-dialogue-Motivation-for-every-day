const speaker = [
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/be3bf2f2-216e-499a-839e-624b6f7be608.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/f5c2c233-1445-4611-9372-76fc0b3470d7.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/143101ca-e110-4f85-87b2-bddf30523bf6.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/811fdf61-ac55-48a7-bfa0-126d1eb5c229.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/6f9102a7-3df8-42f9-96c9-d26d2d62085e.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/76e1d4c1-441c-4c7b-8e30-3e34fe8f5d58.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/26976d50-c6a1-46d3-b73b-e5c3e2de75dd.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/fb0ea615-3991-4a23-ba76-85c8b352294c.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/112bd6f8-2d12-4857-854b-1694f0892ee0.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/17781e50-ecb3-4165-804e-42b7fc802a9f.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/1be821dd-750b-4aa6-a409-4721790ea63e.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/5b53ac56-83f9-45c8-8904-d1b7dc043304.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/2423a25b-c356-427b-8cea-edaa96c29058.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/62e0718f-f387-4333-83d9-00706fb711d2.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/a51d668e-8246-48f5-b666-324cb78c8d85.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/d54ea36e-d493-4fc9-a900-1d5aae1043a2.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/7ec38ea6-8096-40f7-8a34-e68ee71282d6.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/2f1475e1-80f0-444d-a2d2-0b462fd8ada6.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/c39a2944-4c60-4e90-ab73-8540a14156ca.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/58fdcd1f-2664-484a-abcf-5cbab6f3653c.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/182bbe96-331d-476a-ac62-8b6e039b81e7.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/62186351-776b-4b8e-82ad-32a82e7653c3.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/65a88f21-b23e-4e85-a84a-f0165a7bb1b5.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/b9574b4c-496b-48ea-80ad-49e887d26a32.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/99da376b-cbf8-4035-9816-1e0a4b9b1579.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/a925958a-34ec-45cf-8dc1-b503095794a8.opus">',
 '<speaker audio="dialogs-upload/9b95debe-fa40-4945-adcb-05fced52f650/c688c2bc-38d5-42c5-ab7b-11124acb572d.opus">',
]

module.exports.handler = async (event, context) => {
  const { version, session, request } = event;


  let randomSpeaker = speaker[Math.floor(Math.random() * speaker.length)];



  let text = `Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Для начала работы скажите "Начать". Следующую мотивационную звукозапись вы сможете прослушать по команде "Продолжи" или "Далее"`; // Начальный текст

  let tts =
  "Привет! Замечательно, что ты стремишься сделать свой день более продуктивным! Для начала работы скажите Начать. Следующую мотивационную звукозапись вы сможете прослушать по команде Продолжи или Далее";
  if (request["command"] === "начать") {
      tts = randomSpeaker
     text='Слушайте внимательно'
  }

  if (request["command"] === "продолжи") {
    tts = randomSpeaker
   text='Слушайте внимательно'
}
if(request["command"] === 'далее') {
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