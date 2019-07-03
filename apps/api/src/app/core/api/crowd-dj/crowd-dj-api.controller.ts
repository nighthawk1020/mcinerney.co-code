
import { Controller, Get, Res, Inject } from "@nestjs/common";
import { Response } from 'express';

@Controller()
export class CrowdDjApiController {
  private readonly redirectUri = '/crowd-dj/landing';

  constructor(@Inject('baseUri') readonly baseUri: string) {}

  @Get('spotify/redirect')
  redirectToSpotify(@Res() res: Response) {
    const scopes = 'user-read-private user-read-email';
    res.redirect(`https://accounts.spotify.com/authorize?` + 
              `response_type=code` +
              `&client_id=${process.env.SPOTIFY_CLIENT_ID}` +
              `&scope=${encodeURIComponent(scopes)}` +
              `&redirect_uri=${encodeURIComponent(this.baseUri + this.redirectUri)}`);
  }

}