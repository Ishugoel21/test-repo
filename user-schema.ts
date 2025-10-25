/**
 * User Schema - Merged from 3 developers
 */

export interface User {
  id: number;
  username: string;
  email: string;           // Added by Developer A
  phone: string;           // Added by Developer B
  metadata: Record<string, any>;  // Added by Developer C
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = {
  tableName: 'users',
  columns: {
    id: { type: 'integer', primary: true, autoIncrement: true },
    username: { type: 'varchar', length: 100, unique: true },
    email: { type: 'varchar', length: 255, unique: true, index: true },
    phone: { type: 'varchar', length: 20, index: true },
    metadata: { type: 'jsonb', default: {} },
    createdAt: { type: 'timestamp', default: 'NOW()' },
    updatedAt: { type: 'timestamp', default: 'NOW()' }
  }
};
