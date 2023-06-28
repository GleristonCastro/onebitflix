import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models";
import { categoryResourceOption } from "./category";

//Vamos criar a constante adminJsResources e passar o tipo do array ResourceOptions[], pois será uma opção de todos os arrays

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOption
  }
]