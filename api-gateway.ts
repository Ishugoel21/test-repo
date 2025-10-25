/**
 * API Gateway - Routes to correct version
 */

import * as v1 from './api-v1';
import * as v2 from './api-v2';
import * as v3 from './api-v3';

export function routeRequest(req, res) {
  const version = req.headers['api-version'] || 'v1';
  
  switch (version) {
    case 'v3':
      return v3.handleGetUser(req, res);
    case 'v2':
      return v2.handleGetUser(req, res);
    case 'v1':
    default:
      return v1.handleGetUser(req, res);
  }
}

export const deprecationWarnings = {
  v1: 'API v1 will be deprecated on 2026-01-01',
  v2: 'API v2 is current stable version',
  v3: 'API v3 is in beta'
};
