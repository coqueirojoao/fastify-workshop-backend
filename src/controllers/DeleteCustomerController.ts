import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";
import { HttpCodes } from "../utils/HttpCodes";

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.body as { id: string };
        const deleteCustomerService = new DeleteCustomerService();

        const costumer = await deleteCustomerService.execute({ id });

        reply.code(HttpCodes.OK).send(costumer);


    }
}

export { DeleteCustomerController };