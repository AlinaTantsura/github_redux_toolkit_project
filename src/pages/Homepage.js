import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

export const Homepage = () => {
    const { isLoading, isError, data } = useSearchUsersQuery('alinatan');
    console.log(data)
    return (
      <>
        <div>Homepage</div>
            <ul>{data.items.map(item => (<li key={item.id}>{item.login}</li>))}</ul>
    </>
  )
}
