import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";

//https://medium.com/@nielsmeima/auth-in-nest-js-and-angular-463525b6e071
// TODO

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{
    
    constructor()
    {
        super({
            clientID    : process.env.GPLAY_CLIENT_ID,     // <- Replace this with your client id
            clientSecret: process.env.GPLAY_CLIENT_SECRET, // <- Replace this with your client secret
            callbackURL : 'http://localhost:8080/api/crowd-dj/spotify/redirect/response',
            passReqToCallback: true,
            scope: ['profile']
        })
    }


    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
    {
        try
        {
            console.log(profile);

            const jwt: string = 'placeholderJWT'
            const user = 
            {
                jwt
            }

            done(null, user);
        }
        catch(err)
        {
            // console.log(err)
            done(err, false);
        }
    }

}