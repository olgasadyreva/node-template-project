setTimeout(() => {
  console.log('Был диван,');
  process.nextTick(() => {
    console.log('На диване');
  });
}, 10);

setImmediate(() => {
  console.log('В чемодане');
});

process.nextTick(() => {
  console.log('Чемодан,');
});

setTimeout(() => {
  console.log('Ехал слон.');
  setImmediate(() => {
    console.log('Кто не верит –');
  });
  setImmediate(() => {
    console.log('Выйди вон!');
  });
}, 20);

console.log('Плыл по морю');
