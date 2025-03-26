import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from '../services/list-episodes-service'

export const getlistEspiodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

     const queryString = req.url?.split("?p=")[1] || "";

    const content = await serviceListEpisodes(queryString);

    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
) => {
    
    const content = await serviceListEpisodes(req.url);

    res.writeHead(200, {"Content-Type": "application/json" });
    res.end(JSON.stringify(content));

};