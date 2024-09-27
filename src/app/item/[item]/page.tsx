import React from 'react'

const ItemPage = ({params}: {params:{item:string}}) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold capitalize'>{params.item} page</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, blanditiis. Voluptatibus, deserunt maxime. Alias harum praesentium perferendis accusamus architecto culpa qui exercitationem eius quam! Repellat minima nostrum eaque commodi numquam.
        </p>
    </div>
  )
}

export default ItemPage