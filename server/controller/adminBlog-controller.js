import Blog from "../models/adminBlogModel.js";



export const createBlog = async (req , res) => {
    
  const { title, content, date, author, role } = req.body;

  try {
    const image = req.file ? req.file.path : null;
    console.log(req.body)
    console.log(image)
    const newBlog = new Blog({
      title,
      content,
      image,
      date, 
      author,
      role
    });

    await newBlog.save();
    console.log(`Blog saved successfully`)
    return res.status(200).json(newBlog);

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Server error' });
  }
};

export const getAllBlogs = async ( req , res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
}

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  console.log('Received ID:', id); 
  try {
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      console.log('Blog not found')
      return res.status(404).json({ message: 'Blog not found' });
    }
    console.log('Blog deleted successfully', blog)
    return res.status(200).json({ message: 'Blog deleted successfully', blog });
  } catch (error) {
    console.log('Server error', error)
    return res.status(500).json({ message: 'Server error', error });
  }
};
