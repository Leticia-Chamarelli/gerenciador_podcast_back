import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from '../services/list-episodes-service'
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

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
    
    const content = await serviceListEpisodes(req.url);

    res.writeHead(StatusCode.OK, {"Content-Type": ContentType.JSON });
    res.end(JSON.stringify(content));

};