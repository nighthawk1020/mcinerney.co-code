import { Router, Response, Request } from 'express';
import * as querystring from 'querystring';
import * as request from 'request';
import { SPOTIFY_LANDING_ROUTE, ROUTE_PREFIX, SPOTIFY_AUTH_ROUTE, SPOTIFY_REDIRECT_ROUTE } from '../../../routes/route-prefixes';
import { environment } from '../../../../environments/environment';
import { NamespaceManager } from '../../sockets/namespace/namespace-manager';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export function setupSpotifyAuthRoutes(router: Router) {
  const redirect_uri = environment.baseUri + ROUTE_PREFIX + SPOTIFY_REDIRECT_ROUTE;
  const spotifyLandingRoute = environment.baseUri + SPOTIFY_LANDING_ROUTE;
  router.get(SPOTIFY_AUTH_ROUTE, (req: Request, res: Response) => {
    const scope = 'streaming,user-read-email,user-read-private';
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
          const room = NamespaceManager.instance().generateNamespaceCode(code);
          const query = querystring.stringify(
            {
              room
            }
          )
          res.redirect(`${spotifyLandingRoute}/?${query}`);
        }
      });
    }
  });
}