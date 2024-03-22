import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerProps } from "../../../interfaces/ICustomerService";
import { HttpCodes } from "../../../utils/HttpCodes";
import { IUpdateCustomerController, IUpdateCustomerRepository } from "./Protocol";

export class UpdateCustomerController implements IUpdateCustomerController {
    constructor(private readonly updateCustomerRepository: IUpdateCustomerRepository) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const { id, name, email, status } = request.body as UpdateCustomerProps

        const customers = await this.updateCustomerRepository.update({ id, name, email, status });

        reply.code(HttpCodes.OK).send(customers);
    }
}

