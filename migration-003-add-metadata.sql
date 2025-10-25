-- Migration by Developer C
-- Add metadata field to users table

ALTER TABLE users ADD COLUMN metadata JSONB DEFAULT '{}';
CREATE INDEX idx_users_metadata ON users USING GIN (metadata);

-- Rollback
-- ALTER TABLE users DROP COLUMN metadata;
