import * as http from "http";
import { getFilterEpisodes, getlistEspiodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getlistEspiodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    }
    }