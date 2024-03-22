import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../../../utils/HttpCodes";
import { IListAllCustomersController, IListAllCustomersRepository } from "./Protocol";


class ListAllCustomersController implements IListAllCustomersController {
    constructor(private readonly listAllCustomersRepository: IListAllCustomersRepository) {}
    
    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    

        const customers = await this.listAllCustomersRepository.listAll();

        reply.code(HttpCodes.OK).send(customers);

}

}

export { ListAllCustomersController };