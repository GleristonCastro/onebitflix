import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models";
import { categoryResourceOption } from "./category";
import { courseResourceOptions, courseResourceFeatures } from "./course";
import { episodeResourceOptions, episodeResourceFeatures } from "./episode";

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
  }
]