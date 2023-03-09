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
    if(db == null) return null;
  }

  static async saveUser({ email, password, phoneNumber }){
    if(db == null) return null;

  }
}