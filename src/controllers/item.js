import { BadRequestException } from "../exceptions/bad-request.js";
import { NotFoundException } from "../exceptions/not-found.js";
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
        new BadRequestException("Item already added!", ErrorCodes.bad_request)
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
export const getItems = async (req, res, next) => {
  try {
    const items = await prismaClient.item.findMany({});
    return res.json({ status: 200, data: items });
  } catch (err) {
    next(new BadRequestException("Bad Request!", ErrorCodes.bad_request));
  }
};
// get item
export const getItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await findDataById("item", id);
    if (!item) {
      next(new BadRequestException("Bad Request!", ErrorCodes.bad_request));
    } else {
      return res.json({ status: 200, data: item });
    }
  } catch (err) {
    next(new BadRequestException("Bad Request!", ErrorCodes.bad_request));
  }
};

// edit item
export const editItem = async (req, res, next) => {
  const { id } = req.params;
  const item = await findDataById("item", id);
  if (!item) {
    next(
      new NotFoundException(
        "Item not found to update!",
        ErrorCodes.item_not_found
      )
    );
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
    next(
      new NotFoundException(
        "Item not found to delete!",
        ErrorCodes.item_not_found
      )
    );
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
