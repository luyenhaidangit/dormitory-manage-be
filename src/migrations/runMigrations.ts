import { createPool } from 'mysql2/promise';
import * as fs from 'fs';
import * as path from 'path';

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'haidang106',
  database: 'dormitory',
  port: 3306
});

async function runMigration() {
  try {
    const sqlPath = path.join(__dirname, 'create_users_table.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    await pool.query(sql);
    console.log('Migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
  } finally {
    await pool.end();
  }
}

runMigration();
