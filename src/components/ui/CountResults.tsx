import React from 'react'

const CountResults = ({number}:{number:number}) => {
  return (
    <div>
        <button className="rounded-[12px] bg-[#efefef] px-[16px] py-3 text-[16px] text-[#666D80] whitespace-nowrap">
  {number + " "}Results Found
</button>

    </div>
  )
}

export default CountResults