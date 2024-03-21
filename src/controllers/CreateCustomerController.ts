import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";
import { HttpCodes } from "../utils/HttpCodes";


class CreateCostumerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email } = request.body as { name: string, email: string };

        const customerService = new CreateCustomerService()

        const customer = await customerService.execute({ name, email });


        reply.code(HttpCodes.CREATED).send(customer);
    }
}

export { CreateCostumerController }