import { FastifyReply, FastifyRequest } from "fastify";
import { HttpCodes } from "../../../utils/HttpCodes";
import { IDeleteCustomerController, IDeleteCustomerRepository } from "./Protocol";

class DeleteCustomerController implements IDeleteCustomerController {
    constructor(private readonly deleteCustomerRepository: IDeleteCustomerRepository) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id } = request.body as { id: string };

        const costumer = await this.deleteCustomerRepository.delete({ id });

        reply.code(HttpCodes.OK).send(costumer);


    }
}

export { DeleteCustomerController };