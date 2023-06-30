import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourceOption } from "./category";
import { courseResourceOptions } from "./course";

//Vamos criar a constante adminJsResources e passar o tipo do array ResourceOptions[], pois será uma opção de todos os arrays

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOption
  },
  {
    resource: Course,
    options: courseResourceOptions
  }
]