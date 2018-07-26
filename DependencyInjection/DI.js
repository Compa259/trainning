export default function makeTodosService ({ db }) {
    return {
      getTodos: () => {
        return db.query('select * from todos')
      }
    }
  }