import Fastify, { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CustomerRoutes } from "./routes/CustomerRoutes";
import fastifyCors from "@fastify/cors";
import { HttpCodes } from "./utils/HttpCodes";
import dotenv from "dotenv";

dotenv.config();

class Server {
    private app: FastifyInstance;

    constructor() {
        this.app = Fastify({ logger: true });
        this.setupErrorHandler();
        this.setupCors();
        this.setupRoutes();
    }

    private setupErrorHandler(): void {
        this.app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
            reply.code(HttpCodes.BAD_REQUEST).send({ message: error.message });
        });
    }

    private async setupCors(): Promise<void> {
        await this.app.register(fastifyCors);
    }

    private async setupRoutes(): Promise<void> {
        new CustomerRoutes(this.app).initializeRoutes();
    }

    public async start(): Promise<void> {
        try {
            const port = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3333;
            await this.app.listen({ port });
            console.log(`Server listening on port ${port}`);
        } catch (err) {
            console.error("Error starting server:", err);
            process.exit(1);
        }
    }
}

const server = new Server();
server.start();
