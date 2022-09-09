import React from 'react'
import { Title } from '../components/Title/Title'
import { ContentCard } from './ContentCard'
import { ItemCard } from './ItemCard';

export const Cards = () => {
    const {categories} = ContentCard();
    if (Object.keys(categories).length === 0) {
        return <div>Loading</div>
    }
    console.log(categories);
  return (
    <>
    <Title title='Nuestros Productos' />
    <div className='grid grid-cols-2  justify-around gap-1'>
    {
        categories?.map((category) => <ItemCard key={category.id} category={category}/>)
    }
    </div>
    </>
  )
}
