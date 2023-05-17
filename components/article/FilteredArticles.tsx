'use client'

import React from 'react'

import { Search } from '../icons'
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
			<div className='relative my-2 text-shade-2 -mx-2 py-2'>
				<input
					type='text'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder='Search articles'
					aria-label='Search articles'
					className='w-full rounded-full border border-color-1 bg-theme py-2 pl-12 transition-colors duration-200 ease-linear focus:border-color-2 focus:outline-none'
					id='search'
				/>
				<label htmlFor='search'>
					<Search />
				</label>
			</div>

			{!filteredArticles.length && (
				<div className='text-center text-base text-shade-2'>No articles found</div>
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