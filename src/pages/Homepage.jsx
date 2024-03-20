import React, { useEffect, useState } from 'react'
import { useLazyGetUserRepositoriesQuery, useSearchUsersQuery } from '../store/github/github.api'
import { useDebounce } from '../hooks/debounce';
import RepositoriesCard from '../components/RepositoriesCard';

export const Homepage = () => {
  const [searchWord, setSearchWord] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const [userName, setUserName] = useState('');
  const debounced = useDebounce(searchWord);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  const [fetchRepos, { data: repositories } ]= useLazyGetUserRepositoriesQuery(userName);

  useEffect(() => {
    setDropdown((debounced.length > 2 && data && data.items.length > 0) ? true : false)
    console.log(data)
  }, [debounced, data]);

  const handlerClick = (userName) => {
    fetchRepos(userName);
    setDropdown(false);
    setUserName(userName);
  }
  console.log(repositories)
    return (
      <div className='flex align-middle flex-col pt-5 px-5 mx-auto h-screen w-screen'>
        {isError && <p className='text-center font-bold text-red-500'>Something went wrong...</p>}
        
        {!isError && (
        <div className='relative w-[560px]'>
          <input type='text'
            className='border py-2 px-4 w-full h-[42px] mb-2'
            placeholder='Here will be your text'
            onChange={e=>setSearchWord(e.target.value)}/>
          {isLoading && <p className='text-center font-bold text-yellow-300'>Loading...</p>} 
        
        {(data && dropdown)&& <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[250px] overflow-y-scroll shadow-sm'>{data.items.map(({ id, login }) => (
          <li key={id}
            className=' py-2 px-2 hover:bg-gray-300 hover:underline cursor-pointer transition-all'
            onClick={() => handlerClick(login)}>
            {login}</li>))}</ul>} 
            {(repositories && !dropdown && searchWord.length > 2) && <ul>{repositories.map(repo => (<RepositoriesCard repo={repo} />))}</ul>}
          </div>
        )
        }
    </div>
  )
}
