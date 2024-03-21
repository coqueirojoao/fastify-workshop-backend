import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../../utils/HttpCodes";
import { DeleteCustomerService } from "../../services/CustomerService/DeleteCustomerService";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = request.body as { id: string };
        const deleteCustomerService = new DeleteCustomerService();

        const costumer = await deleteCustomerService.execute({ id });

        reply.code(HttpCodes.OK).send(costumer);


    }
}

export { DeleteCustomerController };