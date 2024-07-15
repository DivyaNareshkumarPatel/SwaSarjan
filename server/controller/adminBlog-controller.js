import Blog from "../models/adminBlogModel.js";



export const createBlog = async (req , res) => {
    
  const { title, content, date, author,  } = req.body;

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
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch blogs' });
      }
}