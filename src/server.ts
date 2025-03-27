import * as http from "http";
import { getFilterEpisodes, getlistEspiodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [baseUrl, queryString] = req.url?.split("?") ?? ["",""];

    if(req.method === "GET" && baseUrl === Routes.LIST) {
        await getlistEspiodes(req, res);
    }

    if(req.method === "GET" && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(req, res);
    }
    }
);

const port = process.env.PORT;

server.listen(port, ()=> {
    console.log(`servidor iniciado na porta ${port}`);
});