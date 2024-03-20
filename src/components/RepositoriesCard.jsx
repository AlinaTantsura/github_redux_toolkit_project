import React from 'react'

const RepositoriesCard = ({repo}) => {
  return (
    <li key={repo.id} className='p-1 mb-2 border rounded shadow-sm hover:bg-gray-100 hover:shadow-lg transition-all'>
          <a href={repo.html_url} target="_blank" rel='noreferrer'>
              <h4 className='mb-1 font-medium '><b>Repository name: </b>{repo.name}</h4>
              <p>{repo?.description}</p>
              <p className='text-sm'>Language: <span className='font-semibold'>{repo?.language}</span></p>
              <p className='text-sm'>Visibility: <span className=' font-semibold'>{repo?.visibility}</span></p>
              <p></p>
          </a>
    </li>
  )
}

export default RepositoriesCard