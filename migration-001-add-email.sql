-- Migration by Developer A
-- Add email field to users table

ALTER TABLE users ADD COLUMN email VARCHAR(255);
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);
CREATE INDEX idx_users_email ON users(email);

-- Rollback
-- ALTER TABLE users DROP COLUMN email;
