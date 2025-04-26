import itemSchema from "../../../models/item.model.js";
export const addItem = async (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || !price) {
    return res
      .status(404)
      .json({ message: "All feilds are required", success: false });
  }
  itemSchema.create({
    name,
    category,
    price,
  });
  return res
    .status(200)
    .json({ message: "Item Created successfully", success: true });
};

export const deleteItem = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(404).json({ message: "Id is required", success: false });
  }
  itemSchema.deleteOne({ _id: id });
  return res
    .status(200)
    .json({ message: "Item deleted successfully", success: true });
};
