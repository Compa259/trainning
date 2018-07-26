import db from './database/mydatabase';

export default {
    getTodos: () => {
        return db.query('select * from task');
    }
}
