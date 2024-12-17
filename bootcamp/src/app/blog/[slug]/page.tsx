import React from 'react';
import BlogPage from '@/components/blogPage';

export const dynamic = 'force-dynamic'

type newParams = Promise<{slug: string}>

export default async function Blog(props: { params: newParams}) {

    const {slug} = await props.params;

	return <BlogPage slug={slug}/>
}