import React, { Children, useState } from 'react'
import ChilidContainer from './ChilidContainer'

const ParentContainer = () => {
    const [value, setValue] = useState('');

    // function check(data){
    //     return setValue(data);
    // }




  return (
    <div>
        <h1>Parent Compont</h1>
        {
            value ? value : ''
        }
        <ChilidContainer setValue={setValue}/>
    </div>
  )
}

export default ParentContainer