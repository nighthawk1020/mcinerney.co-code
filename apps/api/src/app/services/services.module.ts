import { Module, HttpModule } from "@nestjs/common";
import { StaticFileService } from './static-file/static-file.service';
import { McinerneyHttpService } from './http/mcinerney-http.service';

@Module({
  imports: [
    HttpModule
  ],
  exports: [
    McinerneyHttpService,
    StaticFileService
  ],
  providers: [
    McinerneyHttpService,
    StaticFileService
  ]
})
export class ServicesModule {}