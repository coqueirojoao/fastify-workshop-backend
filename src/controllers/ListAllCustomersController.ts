import { FastifyReply, FastifyRequest } from "fastify";
import { ListAllCustomersService } from "../services/ListAllCustomersService";
import { HttpCodes } from "../utils/HttpCodes";


class ListAllCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
    
        const listAllCustomersService = new ListAllCustomersService();

        const customers = await listAllCustomersService.execute();

        reply.code(HttpCodes.OK).send(customers);

}

}

export { ListAllCustomersController };