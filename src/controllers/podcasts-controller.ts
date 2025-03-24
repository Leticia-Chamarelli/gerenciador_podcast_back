import { IncomingMessage, ServerResponse} from "http";

export const getlistEspiodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {
    res.writeHead(200,{'content-type': "application/json"});
    res.end(JSON.stringify({
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30&pp",
        category: ["saúde", "bodybuilder", "esporte"]
    })
);
};