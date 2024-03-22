import { MethodsForValidation } from "./../utils/MethodsForValidation";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateCustomerProps,
  DeleteCustomerProps,
  UpdateCustomerProps,
} from "../interfaces/ICustomerService";
import { Customer } from "@prisma/client";
import prismaClient from "../db/prisma/client";
import { ValidatePerson } from "../utils/ValidatePerson";

export class CheckCostumerFields {
  public static validateId(id: string): void {
    const regExMongoId = /^[a-f\d]{24}$/i;

    if (!id || !regExMongoId.test(id)) {
      throw new Error("Você precisa enviar um ID válido!");
    }
  }

  public static async checkIfPersonExists(id: string): Promise<void> {
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não existe.");
    }
  }

  public static async checkIfEmailExists(email: string): Promise<void> {
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        email: email,
      },
    });

    if (findCustomer) {
      throw new Error("Email já existe na nossa base de dados.");
    }
  }

  public static async validateUpdate(
    request: FastifyRequest,
    reply: FastifyReply,
    done: () => void
  ): Promise<void> {
    const { id, name, email, status } = request.body as UpdateCustomerProps;
    const method = MethodsForValidation.UPDATE;

    this.validateId(id);

    if (!ValidatePerson.execute({ name, email, status, method })) {
      throw new Error("As modificações precisam ser válidas.");
    }

    await this.checkIfPersonExists(id);

    if (email) {
      await this.checkIfEmailExists(email);
    }

    return done();
  }

  public static async validateCreate(
    request: FastifyRequest,
    reply: FastifyReply,
    done: () => void
  ): Promise<void> {
    const { name, email } = request.body as CreateCustomerProps;
    const method = MethodsForValidation.CREATE;

    if (!ValidatePerson.execute({ name, email, status: null, method })) {
      throw new Error("Preencha os campos corretamente.");
    }

    await this.checkIfEmailExists(email);

    return done();
  }

  public static async validateDelete(
    request: FastifyRequest,
    reply: FastifyReply,
    done: () => void
  ): Promise<void> {
    const { id } = request.body as DeleteCustomerProps;

    this.validateId(id);

    await this.checkIfPersonExists(id);

    return done();
  }
}
