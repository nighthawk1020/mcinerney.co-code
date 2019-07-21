import { Router } from 'express';
import { setupSpotifyAuthRoutes } from './spotify-auth/spotify-auth.service';

export function configureApi (router: Router) {
  setupSpotifyAuthRoutes(router);
}

