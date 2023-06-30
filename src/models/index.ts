//Definir as associações dos módulos
import { Category } from './Category'
import { Course } from './Course'

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Course,
  Category
}