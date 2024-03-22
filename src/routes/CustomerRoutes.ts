import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "../controllers/CustomerController/CreateCustomer/CreateCustomerController";
import { ListAllCustomersController } from "../controllers/CustomerController/ListAllCustomers/ListAllCustomersController";
import { DeleteCustomerController } from "../controllers/CustomerController/DeleteCustomerController";
import { UpdateCustomerController } from "../controllers/CustomerController/UpdateCustomerController";
import { MongoListCustomersRepository } from "../services/CustomerService/MongoListCustomers/MongoListCustomersRepository";
import { CheckCostumerFields } from "../middlewares/CheckCostumerFields";

class CustomerRoutes {
    private fastify: FastifyInstance;

    constructor(fastify: FastifyInstance) {
        this.fastify = fastify;
    }

    public initializeRoutes(): void {
        this.fastify.post("/create-customer", async (request: FastifyRequest, reply: FastifyReply) => {
            await CheckCostumerFields.validateCreate(request, reply, async () => {
                return new CreateCostumerController().handle(request, reply);
            });
        });

        this.fastify.get("/get-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            return new ListAllCustomersController(new MongoListCustomersRepository()).handle(request, reply);
        });

        this.fastify.put("/update-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            await CheckCostumerFields.validateUpdate(request, reply, async () => {
                return new UpdateCustomerController().handle(request, reply);
            });
        });

        this.fastify.delete("/delete-customers", async (request: FastifyRequest, reply: FastifyReply) => {
            await CheckCostumerFields.validateDelete(request, reply, async () => {
                return new DeleteCustomerController().handle(request, reply);
            });
        });
    }
}

export { CustomerRoutes };
