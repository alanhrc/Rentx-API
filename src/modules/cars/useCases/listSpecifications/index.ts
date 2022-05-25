import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";
import { ListSpecificationsController } from "../listSpecifications/ListSpecificationsController";

const specificationsRepository = SpecificationsRepository.getInstance()
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository)
const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase)

export { listSpecificationsController }
