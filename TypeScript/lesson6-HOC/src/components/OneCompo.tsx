
import React, { useState } from 'react'
import GenCompo from './GenCompo';

const OneCompo = (props:any) => {
    const {count,incCount,btnname} = props;

  return (
    <div>
        {count}
        <button onClick={incCount}>{btnname}</button>
    </div>
  )
}

export default GenCompo(OneCompo)