import React from 'react';
import BlogPage from '@/components/blogPage';

type Props = {
    params: { slug: string }
}

export default async function Blog({ params }: Props) {

    const {slug} = await params;

	return <BlogPage slug={slug}/>
}