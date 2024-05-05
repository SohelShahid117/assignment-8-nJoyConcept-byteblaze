import toast, { Toaster } from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  let storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }

  return blogs;
};

export const saveBlogs = (data) => {
  let blogs = getBlogs();

  const isExist = blogs.find((b) => b.id == data.id);
  if (isExist) {
    return toast.error("Already bookmarked");
  }
  blogs.push(data);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked successfully");
};

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remainingBlg = blogs.filter((b) => b.id != id);
  localStorage.setItem("blogs", JSON.stringify(remainingBlg));
  toast.success("Blog removed from bookmark");
};
