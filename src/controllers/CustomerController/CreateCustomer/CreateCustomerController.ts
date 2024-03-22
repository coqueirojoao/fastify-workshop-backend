import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../../../services/CustomerService/CreateCustomerService";
import { HttpCodes } from "../../../utils/HttpCodes";
import { ICreateCustomerController } from "./Protocol";


class CreateCostumerController implements ICreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {

        const { name, email } = request.body as { name: string, email: string };

        const createCustomerService = new CreateCustomerService()

        const customer = await createCustomerService.execute({ name, email });


        reply.code(HttpCodes.CREATED).send(customer);
    }
}

export { CreateCostumerController }