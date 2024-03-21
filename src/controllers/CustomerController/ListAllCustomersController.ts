import { FastifyReply, FastifyRequest } from "fastify";
import { ListAllCustomersService } from "../../services/CustomerService/ListAllCustomersService";
import { HttpCodes } from "../../utils/HttpCodes";


class ListAllCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    
        const listAllCustomersService = new ListAllCustomersService();

        const customers = await listAllCustomersService.execute();

        reply.code(HttpCodes.OK).send(customers);

}

}

export { ListAllCustomersController };