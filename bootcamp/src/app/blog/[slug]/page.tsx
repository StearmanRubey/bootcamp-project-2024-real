import React from 'react';
import BlogPage from '@/components/blogPage';

export const dynamic = 'force-dynamic'

type Props = {
    params: { slug: string }
}

export default function Blog({ params }: Props) {

    const {slug} = params;

	return <BlogPage slug={slug}/>
}