/**
 * API Version 2.0
 * Added email field support
 */

export const routes = {
  getUser: '/api/v2/users/:id',
  createUser: '/api/v2/users',
  updateUser: '/api/v2/users/:id',
  deleteUser: '/api/v2/users/:id',
  getUserByEmail: '/api/v2/users/by-email/:email'  // NEW
};

export function handleGetUser(req, res) {
  return { 
    id: req.params.id, 
    username: 'user1',
    email: 'user1@example.com'  // NEW
  };
}

export function handleGetUserByEmail(req, res) {
  return { email: req.params.email, username: 'user1' };
}
