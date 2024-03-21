import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "./controllers/CreateCustomerController";
import { ListAllCustomersController } from "./controllers/ListAllCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().handle(request, reply);
    })

    fastify.get("/get-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAllCustomersController().handle(request, reply);
    })

    fastify.delete("/delete-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })
}