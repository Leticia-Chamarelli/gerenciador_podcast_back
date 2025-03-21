import * as http from "http";
import { getlistEspiodes } from "./controllers/podcasts-controller";

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(req.method === "GET"){
        await getlistEspiodes(req, res);
    }
}
);

const port = process.env.PORT;

server.listen(port, ()=> {
    console.log(`servidor iniciado na porta ${port}`);
});