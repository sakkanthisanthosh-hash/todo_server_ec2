import todoCollection from "../Model/model.js";

export const addTodo = async (req, res) => {
  try {
    const data = new todoCollection(req.body);
    await data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const data = await todoCollection.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await todoCollection.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
