import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../../services/CustomerService/UpdateCustomerService";
import { UpdateCustomerProps } from "../../interfaces/ICustomerService";
import { HttpCodes } from "../../utils/HttpCodes";

class UpdateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id, name, email, status } = request.body as UpdateCustomerProps

        const updateCustomerService = new UpdateCustomerService();

        const customers = await updateCustomerService.execute({ id, name, email, status });

        reply.code(HttpCodes.OK).send(customers);
    }
}

export { UpdateCustomerController };