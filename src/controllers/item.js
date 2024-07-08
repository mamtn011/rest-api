import { BadRequestException } from "../exceptions/bad-request.js";
import { ErrorCodes } from "../exceptions/root.js";
import { ValidationError } from "../exceptions/validation.js";
import { prismaClient } from "../index.js";
import { ItemSchema } from "../schema/item.js";
import { findDataByField, findDataById } from "../utils/findData.js";

// create item
export const createItem = async (req, res, next) => {
  const validate = ItemSchema.safeParse(req.body);
  if (!validate.success) {
    next(
      new ValidationError(
        validate?.error,
        "Unexpected entity!",
        ErrorCodes.validation_error
      )
    );
  } else {
    const item = await findDataByField("item", "name", req?.body?.name);
    if (item) {
      next(
        new BadRequestException(
          "Item already added!",
          ErrorCodes.item_already_exist
        )
      );
    } else {
      const newItem = await prismaClient.item.create({
        data: req.body,
      });
      return res.json({
        status: 200,
        data: newItem,
        message: "Item created.",
      });
    }
  }
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
export const editItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await findDataById("item", id);
  if (!item) {
    next(new BadRequestException("Item not found!", ErrorCodes.item_not_found));
  } else {
    const validate = ItemSchema.safeParse(req.body);
    if (!validate.success) {
      next(
        new ValidationError(
          validate?.error,
          "Unexpected entity!",
          ErrorCodes.validation_error
        )
      );
    } else {
      const editedItem = await prismaClient.item.update({
        where: {
          id,
        },
        data: req.body,
      });
      return res.json({
        status: 200,
        data: editedItem,
        message: "Item updated.",
      });
    }
  }
};

// delete item
export const deleteItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await findDataById("item", id);
  if (!item) {
    next(new BadRequestException("Item not found!", ErrorCodes.item_not_found));
  } else {
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
  }
};
