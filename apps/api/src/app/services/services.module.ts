import { Module } from "@nestjs/common";
import { StaticFileService } from './static-file/static-file.service';

@Module({
  exports: [
    StaticFileService
  ],
  providers: [
    StaticFileService
  ]
})
export class ServicesModule {}