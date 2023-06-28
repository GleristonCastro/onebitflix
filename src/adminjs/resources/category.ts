import { ResourceOptions } from "adminjs";

//Com o ResourceOptions agora temos todas as opções abaixo de:
export const categoryResourceOption: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'position'], //editar
  filterProperties: ['name', 'position', 'creatdAt', 'updatedAt'], //filtrar
  listProperties: ['id', 'name', 'position'], //listar
  showProperties: ['id', 'name', 'position', 'creatdAt', 'updatedAt'] //exibir
}