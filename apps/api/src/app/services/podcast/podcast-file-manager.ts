import { Storage } from '@google-cloud/storage';
export const podcastMapping = {}

async function getBuckets() {
  function filesCallback(err, files) {
    if (files) {
      files.forEach((file) => {
        podcastMapping['/' + file.metadata.name] = file;
      })
    }
  }
  const storage = new Storage();
  const bucket = storage.bucket(process.env.PODCAST_BUCKET_NAME);
  bucket.getFiles(
    {
      directory: 'podcasts',
      prefix: 'nomsters-ep'
    },
    filesCallback
  )
}

getBuckets();

export function getFile(fileName: string) {

}