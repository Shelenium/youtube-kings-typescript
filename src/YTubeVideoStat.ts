interface YTubeVideoId {
    kind: string;
    videoId:string;
}

interface YTubeVideoSnippetThumbImg {
    height: number;
    url: string;
    width: number;
}

interface YTubeVideoSnippetThumb {
   default: YTubeVideoSnippetThumbImg;
   high: YTubeVideoSnippetThumbImg;
   medium: YTubeVideoSnippetThumbImg;
}

interface YTubeVideoSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: string;
    thumbnails: YTubeVideoSnippetThumb;
    title: string;
}

interface YTubeVideo {
    etag: string;
    id: YTubeVideoId;
    kind: string;
    snippet: YTubeVideoSnippet;
}


interface YTubeStatStatistics {
    commentCount:string;
    dislikeCount:string;
    favoriteCount:string;
    likeCount:string;
    viewCount:string;
}

interface YTubeStat {
    etag: string;
    id: string;
    kind: string;
    statistics: YTubeStatStatistics;
}
export {YTubeStat,YTubeVideo}