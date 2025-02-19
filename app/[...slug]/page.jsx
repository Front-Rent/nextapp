// app/[...slug]/page.jsx

export default function DynamicPage({ params }) {
    const { slug } = params;

    if (slug[0] === 'about') {
        return <div>About Page</div>;
    }

    if (slug[0] === 'blog') {
        return <div>Blog Post: {slug[1]}</div>;
    }

    return <div>Page Not Found</div>;
}
