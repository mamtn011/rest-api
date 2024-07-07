import { prismaClient } from "../index.js";

// create item
export const createItem = async (req, res) => {
  const newItem = await prismaClient.item.create({
    data: req.body,
  });
  return res.json({
    status: 200,
    data: newItem,
    message: "Item created.",
  });
};
// get items
export const getItems = async (req, res) => {
  const items = await prismaClient.item.findMany({});
  return res.json({ status: 200, data: items });
};
// get item
export const getItem = async (req, res) => {
  const { id } = req.params;
  const item = await prismaClient.item.findFirst({
    where: {
      id,
    },
  });
  return res.json({ status: 200, data: item });
};

// edit item
export const editItem = async (req, res) => {
  const { id } = req.params;
  const newItem = await prismaClient.item.update({
    where: {
      id,
    },
    data: req.body,
  });
  return res.json({
    status: 200,
    data: newItem,
    message: "Item updated.",
  });
};

// delete item
export const deleteItem = async (req, res) => {
  const { id } = req.params;

  const deletedItem = await prismaClient.item.delete({
    where: {
      id,
    },
  });

  return res.json({
    status: 200,
    data: deletedItem,
    message: "Item deleted.",
  });
};
