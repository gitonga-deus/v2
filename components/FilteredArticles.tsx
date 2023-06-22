'use client'

import React from 'react'

import { Search } from './icon'
import ArticleCard from './ArticleCard'

import { Article } from 'contentlayer/generated'

type ArticleCore = Pick<Article, '_id' | 'slug' | 'title' | 'summary' | 'publishedAt'>

type FilteredPostsProps = {
	articles: ArticleCore[]
}

const FilteredArticles = (props: FilteredPostsProps) => {
	const { articles } = props
	const [searchValue, setSearchValue] = React.useState('')

	const filteredArticles = articles.filter((article) =>
		article.title.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<>
			<div className='relative my-2 py-2 text-accent-5'>
				<input
					type='text'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder='search articles'
					aria-label='Search articles'
					className='w-full rounded-md border border-accent-2 bg-accent-1 text-accent-5 placeholder:text-accent-5 p-2 md:-mx-1 pl-12 transition-colors duration-200 ease-linear text-base tracking-tight focus:border-accent-3 focus:outline-none'
					id='search'
				/>
				<label htmlFor='search'>
					<Search />
				</label>
			</div>

			{!filteredArticles.length && (
				<div className='text-center text-base text-accent-5'>No articles found</div>
			)}

			<div className=''>
				{filteredArticles.map((article) => (
					<ArticleCard readingTime={undefined} key={article._id} {...article} />
				))}
			</div>
		</>
	)
}

export default FilteredArticles;