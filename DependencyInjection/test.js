import mydatabase from "./database/mydatabase";
import makeTodosService from './DI';

describe('Todos Service', function () {
    beforeEach(() => {
      subject = makeTodosService({
        db: mydatabase
      })
    })
    
    it('works', async function () {
      const todos = await subject.getTodos()
      expect(todos.length).to.equal(3)
    })
})