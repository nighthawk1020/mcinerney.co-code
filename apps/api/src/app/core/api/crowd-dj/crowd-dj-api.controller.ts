
import { Controller, Get, Res, UseInterceptors, Inject, Query } from "@nestjs/common";
import { Response } from 'express';
import { RedirectInterceptor } from '../../../services/interceptors/redirect-interceptor/redirect-interceptor.service';
import { McinerneyHttpService } from '../../../services/http/mcinerney-http.service';

@Controller()
export class CrowdDjApiController {
  constructor(@Inject('baseUri') readonly baseUri: string,
              private readonly mcinerneyHttpService: McinerneyHttpService) {}

  @Get('spotify/redirect')
  @UseInterceptors(new RedirectInterceptor(process.env.SPOTIFY_REDIRECT_URL))
  redirectToSpotify(@Res() res: Response) {}

  @Get('spotify/redirect/response')
  getSpotifyRedirect(@Query() query: any, @Res() res: Response) {
    if (query.code) {
      this.mcinerneyHttpService.getSpotifyApiToken(query.code);
    }
  }

}