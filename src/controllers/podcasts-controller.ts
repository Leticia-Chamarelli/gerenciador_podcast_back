import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from '../services/list-episodes-service'
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getlistEspiodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

     const queryString = req.url?.split("?p=")[1] || "";

    const content = await serviceListEpisodes(queryString);

    res.writeHead(StatusCode.OK,{'content-type': ContentType.JSON});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {
    
    const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON });
    res.end(JSON.stringify(content.body));

};