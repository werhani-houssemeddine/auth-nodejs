const { Client } = require('pg');
const { exit } = require('process')

module.exports = class User{
  static client = null;
  static async connection(/*{ user, host, database, password }*/) {
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'authentication1.0',
      password: '',
      port: 5432
    });

    try{
      await client.connect();
      User.client = client;
      console.log('Connection established');
      
    } catch(err) {
      console.log('Connect to db failed');
      exit(1);
    }

  }

  static async findByProperty({ property, value }){
    if(User.client === null) return null;
    const users = await User.client.query(
      `SELECT * FROM users WHERE ${property} = '${value}'`
    );

    return users.rows;
  }

  static async saveUser({ email, password, phoneNumber }){
    if(User.client === null) return null;
    const users = await User.client.query(
      `
        INSERT INTO users 
        (email, password, phonenumber) 
        VALUES ('${email}', '${password}', '${phoneNumber}')
        RETURNING id 
      `
    );

    return { 
      state: users.rowCount === 1,
      id: users.rows[0].id
    }
  }
}