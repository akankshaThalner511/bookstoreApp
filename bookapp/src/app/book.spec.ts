/*import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book()).toBeTruthy();
  });
}); */
import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    const book = new Book(1, 'Test Book', 100);
    expect(book).toBeTruthy();
  });
});
