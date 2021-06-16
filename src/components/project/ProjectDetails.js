import React from 'react'

const ProjectDetails = (props) => {
    return (
        <div className='container py-16 px-36 mx-auto'>
            <div className="p-12  border-b-2 pb-7">
                <h2 className='text-xl font-semibold my-2 '>Project Title {props.match.params.id}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolores modi, fuga quam tempore corrupti esse ratione eius sed delectus quisquam sunt recusandae, dolorum vero iste pariatur error qui illo dicta quae earum nulla. Vero debitis tempore doloribus mollitia dolores facere id est tenetur perferendis assumenda quod maiores, quis, maxime eaque! Officiis ad, aliquid non ducimus odio qui excepturi dolor atque maiores unde placeat libero reprehenderit consequuntur ullam iusto itaque a quia. Labore repellendus hic illo</p>
            </div>
            <div className="pt-5 px-12 text-gray-500" >
                <p>Posted by Zubair Omer</p>
                <p>2nd September, 2am</p>
            </div>

        </div>
    )
}

export default ProjectDetails