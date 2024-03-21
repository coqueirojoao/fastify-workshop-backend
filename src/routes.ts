import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "./controllers/CustomerController/CreateCustomerController";
import { ListAllCustomersController } from "./controllers/CustomerController/ListAllCustomersController";
import { DeleteCustomerController } from "./controllers/CustomerController/DeleteCustomerController";
import { UpdateCustomerController } from "./controllers/CustomerController/UpdateCustomerController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().handle(request, reply);
    })
    
    fastify.get("/get-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAllCustomersController().handle(request, reply);
    })

    fastify.put("/update-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomerController().handle(request, reply);
    })

    fastify.delete("/delete-customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })
}