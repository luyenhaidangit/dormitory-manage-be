import { pool } from '../config/database';
import { User } from '../types/user.types';

export enum RoleAuth {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  MANAGER = 'MANAGER'
}

export const getAllUsers = async (): Promise<User[]> => {
  const query = 'SELECT * FROM users';
  const [rows] = await pool.query(query);
  return rows as User[];
};

export const getUserById = async (id: number): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [rows] = await pool.query(query, [id]);
  const users = rows as User[];
  return users[0] || null;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  const query = 'SELECT * FROM users WHERE email = ?';
  const [rows] = await pool.query(query, [email]);
  const users = rows as User[];
  return users[0] || null;
};

export const createUser = async (user: Partial<User>): Promise<User | null> => {
  const query = 'INSERT INTO users SET ?';
  const [result] = await pool.query(query, [user]);
  return getUserById((result as any).insertId);
};

export const updateUser = async (id: number, updates: Partial<User>): Promise<User | null> => {
  const query = 'UPDATE users SET ? WHERE id = ?';
  await pool.query(query, [updates, id]);
  return getUserById(id);
};
