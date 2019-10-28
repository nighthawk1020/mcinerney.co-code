export interface YoutubeApiType {
  "id": {
    "kind": string,
    "videoId": string,
    "channelId": string,
    "playlistId": string
  },
  "snippet": {
    "channelId": string,
    "title": string,
    "description": string,
    "thumbnails": {
      [key: string]: {
        "url": string,
        "width": number,
        "height": number
      }
    },
    "channelTitle": string,
    "liveBroadcastContent": string
  }
}
