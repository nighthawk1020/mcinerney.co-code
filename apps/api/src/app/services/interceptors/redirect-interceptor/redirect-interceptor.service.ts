import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RedirectInterceptor implements NestInterceptor {
  constructor(private readonly redirectUri: string) {

  }

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const response = context.switchToHttp().getResponse();
    console.log(this.redirectUri);
    const scopes = 'user-read-private user-read-email';
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // response.redirect()
    response.redirect(`https://accounts.spotify.com/authorize?` + 
                      `response_type=code` +
                      `&client_id=${process.env.SPOTIFY_CLIENT_ID}` +
                      `&scope=${encodeURIComponent(scopes)}` +
                      `&redirect_uri=${encodeURIComponent(environment.baseUri + this.redirectUri)}`)
    return next.handle();
  }
}