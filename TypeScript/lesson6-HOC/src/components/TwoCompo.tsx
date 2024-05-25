
import React, { useState } from 'react'
import GenCompo from './GenCompo';

const TwoCompo = (props:any) => {
    const {count,incCount,btnname} = props;

  return (
    <div>
        {count}
        <button onClick={incCount}>{btnname}</button>
    </div>
  )
}

export default GenCompo(TwoCompo)