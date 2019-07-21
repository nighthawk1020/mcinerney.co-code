import { Router, Response, Request } from 'express';
import * as querystring from 'querystring';
import * as request from 'request';
import { CROWD_DJ_LANDING_ROUTE, ROUTE_PREFIX, SPOTIFY_AUTH_ROUTE, SPOTIFY_REDIRECT_ROUTE } from '../../../routes/route-prefixes';
import { environment } from '../../../../environments/environment';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export function setupSpotifyAuthRoutes(router: Router) {
  const redirect_uri = environment.baseUri + ROUTE_PREFIX + SPOTIFY_REDIRECT_ROUTE;
  const landingRoute = environment.baseUri + CROWD_DJ_LANDING_ROUTE;
  console.log(redirect_uri);
  router.get(SPOTIFY_AUTH_ROUTE, (req: Request, res: Response) => {
    const scope = 'user-read-private';
    res.redirect('https://accounts.spotify.com/authorize?' + 
      querystring.stringify(
        {
          response_type: 'code',
          client_id,
          scope,
          redirect_uri 
        }
      )
    )
  });
  router.get(SPOTIFY_REDIRECT_ROUTE, (req: Request, res: Response) => {
    const code = req.query.code;
    if (code) {
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code,
          redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      }
      request.post(authOptions, (err, response, body) => {
        if (!err && response.statusCode === 200) {
          res.redirect(landingRoute);
        }
      });
    }
  });
}