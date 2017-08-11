import {YTubeStat,YTubeVideo} from './YTubeVideoStat';

interface YTubeResponsePageInfo{
	resultsPerPage: number;
	totalResults: number;
}


export default interface YTubeResponse{
    etag: string;
    items: YTubeVideo[] | YTubeStat[];
    kind: string;
	nextPageToken: string;
	pageInfo: YTubeResponsePageInfo
	regionCode: string;
	result: YTubeResponse;
}