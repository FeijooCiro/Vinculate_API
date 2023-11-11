import { Sequelize } from 'sequelize'

const db = new  Sequelize('vinculate', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
})

export default db