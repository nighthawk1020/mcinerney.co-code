import { Injectable, HttpService } from "@nestjs/common";
import { environment } from '../../../environments/environment';


@Injectable()
export class McinerneyHttpService {
  constructor(private readonly http: HttpService) {

  }

  getSpotifyApiToken(code: string) {
    this.http.post('https://accounts.spotify.com/api/token',
    {
      code,
      redirect_uri: encodeURIComponent(environment.baseUri + process.env.SPOTIFY_REDIRECT_URL),
      grant_type: 'authorization_code',
    },
    {
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' 
                                        + process.env.SPOTIFY_CLIENT_SECRET).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    ).subscribe((data) => {
      console.log(data);
    });
  }
}