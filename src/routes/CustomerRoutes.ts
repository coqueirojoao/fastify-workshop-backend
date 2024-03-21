import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "../controllers/CustomerController/CreateCustomerController";
import { ListAllCustomersController } from "../controllers/CustomerController/ListAllCustomersController";
import { DeleteCustomerController } from "../controllers/CustomerController/DeleteCustomerController";
import { UpdateCustomerController } from "../controllers/CustomerController/UpdateCustomerController";

class CustomerRoutes {
    private fastify: FastifyInstance;

    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;
    }

    public initializeRoutes(): void {
        this.fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateCostumerController().handle(request, reply);
        });

        this.fastify.get("/get-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListAllCustomersController().handle(request, reply);
        });

        this.fastify.put("/update-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            return new UpdateCustomerController().handle(request, reply);
        });

        this.fastify.delete("/delete-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            return new DeleteCustomerController().handle(request, reply);
        });
    }
}

export { CustomerRoutes };
