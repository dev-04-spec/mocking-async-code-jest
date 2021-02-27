//jest.mock('./http');
const {fetchData} =require('./http');
const { loadTitle } = require('./util');

test('should print an uppercase text', () => {
  loadTitle().then(title => {
    fetchData.mockResolvedValueOnce(1);
    expect(title).toBe('DELECTUS AUT AUTEM');
  });
});
