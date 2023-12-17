const Blog = require("./model");

exports.createBlog = async (req, res) => {
  const newBlog = await Blog.create(req.body);
  res.status(201).json({ data: newBlog });
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({});

  res.status(200).json({ data: blogs });
};

exports.getBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.status(200).json({ data: blog });
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  // const {title,body } = req.body;
  const blog = await Blog.findByIdAndUpdate(id , req.body , {new:true});
  res.status(200).json({ data: blog });
};

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) return res.status(404).json("the blog is not found");
  res.status(204).send();
};
