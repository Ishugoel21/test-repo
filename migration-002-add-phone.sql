-- Migration by Developer B
-- Add phone field to users table

ALTER TABLE users ADD COLUMN phone VARCHAR(20);
CREATE INDEX idx_users_phone ON users(phone);

-- Rollback
-- ALTER TABLE users DROP COLUMN phone;
