import { prismaClient } from "../index.js";

// find the data  by id
export const findDataById = async (collection, id) => {
  const data = await prismaClient[collection].findFirst({
    where: {
      id,
    },
  });
  return data;
};

// find the data by Field
export const findDataByField = async (collection, fieldName, fieldValue) => {
  const data = await prismaClient[collection].findFirst({
    where: {
      [fieldName]: fieldValue,
    },
  });
  return data;
};
