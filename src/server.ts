import * as http from "http";


const server = http.createServer( 
);

const port = process.env.PORT;

server.listen(port, ()=> {
    console.log(`servidor iniciado na porta ${port}`);
});