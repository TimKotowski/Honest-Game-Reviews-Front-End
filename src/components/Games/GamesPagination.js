import React from 'react'
import { Pagination } from 'semantic-ui-react'

 const GamesPagination = () => {
  return (
      <Pagination
      boundaryRange={20}
        totalPages={10}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
      />
    )
}

export default GamesPagination
