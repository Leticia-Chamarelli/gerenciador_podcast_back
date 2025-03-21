import { IncomingMessage, ServerResponse} from "http";

export const getlistEspiodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200,{'content-type': "application/json"});
    res.end({
        name: "Letícia",
    });
};