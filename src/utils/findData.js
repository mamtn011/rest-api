import { prismaClient } from "../index.js";

// check the data available or not by id
export const findDataById = async (collection, id) => {
  const data = await prismaClient[collection].findFirst({
    where: {
      id,
    },
  });
  return data;
};

// check the data available or not by Field
export const findDataByField = async (collection, fieldName, fieldValue) => {
  const data = await prismaClient[collection].findFirst({
    where: {
      [fieldName]: fieldValue,
    },
  });
  return data;
};
