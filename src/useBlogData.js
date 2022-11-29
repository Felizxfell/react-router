import { useEffect, useState } from "react";

export function useBlogData() {
  const [blogdata, setBlogdata] = useState([]);

  useEffect(() => {
    setBlogdata([
      {
        title: '¿Qué es React?',
        slug: 'que-es-react',
        content: 'React es el mejor framework de JavaScript.',
        author: 'fell',
      },
      {
        title: '¿Qué es Vue?',
        slug: 'que-es-vue',
        content: 'Vue es el mejor framework de JavaScript.',
        author: 'juandc',
      },
      {
        title: '¿Qué es Angular?',
        slug: 'que-es-angular',
        content: 'Angular es el mejor framework de JavaScript.',
        author: 'nicobytes',
      }
    ]);
  }, [])


  const EliminarBlog = slug => {    
    const index = blogdata.findIndex(item => item.slug === slug)
    const data = [...blogdata]
    data.splice(index, 1)
    setBlogdata(data)
  }

  const EditarBlog = ({ slug, title, content, author }) => {
    const newBloData = blogdata.map(item => {
      if (item.slug === slug) {
        return {
          title,
          slug,
          content,
          author
        }
      }
      return item
    })
    setBlogdata(newBloData);
  }

  return {
    blogdata,
    EliminarBlog,
    EditarBlog
  }
}