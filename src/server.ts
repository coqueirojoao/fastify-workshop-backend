import Fastify, { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { routes } from "./routes";
import fastifyCors from "@fastify/cors";
import { HttpCodes } from "./utils/HttpCodes";

const app = Fastify({ logger: true});

app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    reply.code(HttpCodes.BAD_REQUEST).send({ message: error.message });
})

const server = async () => {

    await app.register(fastifyCors);
    await app.register(routes);

    try {
        await app.listen({ port: 3333 });
    } catch(err) {
        process.exit(1);
    }
}


server();