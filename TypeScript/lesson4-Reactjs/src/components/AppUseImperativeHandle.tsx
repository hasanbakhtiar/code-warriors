import  { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef((props,ref)=>{
        useImperativeHandle(ref,()=>({
            hi:sayHi
        }))
        const sayHi = ()=>{
            alert("Hello everyone")
        }
        return(
            <>
            <input type="text" />
            </>
        )
})


const AppUseImperativeHandle = () => {
    const inputref  = useRef<HTMLInputElement>(null);
    const handleClick = ()=>{
        inputref.current!.hi();
    }
  return (
    <div>
        <MyInput ref={inputref} /><button onClick={handleClick}>test</button>
    </div>
  )
}

export default AppUseImperativeHandle