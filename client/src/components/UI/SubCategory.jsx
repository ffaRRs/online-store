import React from 'react'

const SubCategory = ({items}) => {
// console.log(items);
  return (
    <div className='row-column__column'>
        {
            items.map(item => <div className="row-column__item">{item}(69)</div>)
        }
    </div>
  )
}

export default SubCategory