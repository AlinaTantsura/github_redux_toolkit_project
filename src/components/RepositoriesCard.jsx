import React from 'react';
import {useDispatch} from 'react-redux'
import { githubActions } from '../store/github/github.slice';

const RepositoriesCard = ({ repo }) => {
  // const dispatch = useDispatch();
  // const { addFavorite } = githubActions();
  const handleClick = (e) => {
    console.log(e.currentTarget)
    // dispatch(addFavorite(e.target.value))
  }

  return (
    <li key={repo.id} className='p-1 mb-2 border rounded shadow-sm hover:bg-gray-100 hover:shadow-lg transition-all'>
          <a href={repo.html_url} target="_blank" rel='noreferrer'>
              <h4 className='mb-1 font-medium '><b>Repository name: </b>{repo.name}</h4>
              <p>{repo?.description}</p>
              <p className='text-sm'>Language: <span className='font-semibold'>{repo?.language}</span></p>
              <p className='text-sm'>Visibility: <span className=' font-semibold'>{repo?.visibility}</span></p>
        <button className='px-2 py-1 bg-yellow-200 hover:bg-yellow-300 rounded shadow-sm'
        onClick={handleClick}>Add to the favorite list</button>
          </a>
    </li>
  )
}

export default RepositoriesCard