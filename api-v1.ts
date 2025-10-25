/**
 * API Version 1.0
 * Original stable API
 */

export const routes = {
  getUser: '/api/v1/users/:id',
  createUser: '/api/v1/users',
  updateUser: '/api/v1/users/:id',
  deleteUser: '/api/v1/users/:id'
};

export function handleGetUser(req, res) {
  return { id: req.params.id, username: 'user1' };
}
