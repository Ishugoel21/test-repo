/**
 * API Version 3.0
 * Added pagination support
 */

export const routes = {
  getUser: '/api/v3/users/:id',
  getUsers: '/api/v3/users',  // NEW
  createUser: '/api/v3/users',
  updateUser: '/api/v3/users/:id',
  deleteUser: '/api/v3/users/:id',
  getUserByEmail: '/api/v3/users/by-email/:email'
};

export function handleGetUser(req, res) {
  return { 
    id: req.params.id, 
    username: 'user1',
    email: 'user1@example.com'
  };
}

export function handleGetUsers(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  
  return {
    data: [],
    pagination: { page, limit, total: 0 }
  };
}

export function handleGetUserByEmail(req, res) {
  return { email: req.params.email, username: 'user1' };
}
