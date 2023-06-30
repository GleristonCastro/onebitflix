import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../models";
import { categoryResourceOption } from "./category";
import { courseResourceOptions, courseResourceFeatures } from "./course";
import { episodeResourceOptions, episodeResourceFeatures } from "./episode";
import { userResourceOptions } from "./user";

//Vamos criar a constante adminJsResources e passar o tipo do array ResourceOptions[], pois será uma opção de todos os arrays

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOption
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  }
]