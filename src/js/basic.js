export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'Имя уже занято');
    this.errors.set(2, 'Игра не сохранилась');
    this.errors.set(3, 'Вы не заполнили карточку персонажа');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
