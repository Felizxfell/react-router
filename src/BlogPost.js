import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from './auth';

export default function BlogPost({ blogdata, eliminarBlog, editarBlog }) {
    const navigate = useNavigate()
    const { slug } = useParams();
    const [isedit, setIsedit] = useState(false)
    const [form, setForm] = useState({
        title: '',
        author: '',
        content: '',
        slug: ''
    })

    const auth = useAuth()

    const blogpost = blogdata.find(post => post.slug === slug);

    const permiso = auth.user?.permisos.permiso ?? false;

    const returnToBlog = () => {
        navigate('/blog')
    }

    const deleteBlog = () => {
        eliminarBlog(blogpost.slug)
        navigate('/blog')
    }

    const updateToggle = () => {
        setForm({
            ...blogpost
        })
        setIsedit(true)
    }

    const updateBlog = blogpost => {        
        editarBlog(blogpost)
        setIsedit(false)
    }

    return (
        <>
            {!isedit ?
                (<h2>{blogpost.title}</h2>) :
                (<input type="text" 
                    defaultValue={blogpost.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })} />)
            }
            <button onClick={returnToBlog}>Volver Al Blog</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>

            {permiso?.delete && auth.user && (
                <button onClick={deleteBlog}>
                    Eliminar Blogpost
                </button>
            )}

            {permiso?.update && !isedit && auth.user && (
                <button onClick={updateToggle}>
                    Editar Blogpost
                </button>
            )}

            {isedit && auth.user && (
                <button onClick={() => updateBlog(form)}>
                    Aceptar y Editar
                </button>
            )}
        </>
    );
}
