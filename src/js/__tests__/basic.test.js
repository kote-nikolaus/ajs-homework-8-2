import ErrorRepository from '../basic';

test('should show text of an error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(3)).toBe('Вы не заполнили карточку персонажа');
});

test('should show text of an error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(1)).toBe('Имя уже занято');
});

test('should return unknown error', () => {
  const repo = new ErrorRepository();
  expect(repo.translate(4)).toBe('Unknown error');
});

test('should return unknown error 2', () => {
  const repo = new ErrorRepository();
  expect(repo.translate('4')).toBe('Unknown error');
});

test('should return unknown error 3', () => {
  const repo = new ErrorRepository();
  expect(repo.translate()).toBe('Unknown error');
});
