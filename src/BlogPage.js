import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function BlogPage({ blogdata }) {
    return (
        <>
            <div>BlogPage</div>

            <Outlet />
            
            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post} />
                ))}
            </ul>
        </>
    )
}

function BlogLink({ post }) {
    return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
    );
}
