import { Button } from '@mui/material'
type Props = {
    value:number
    onAdded:()=>void;
}

export default function Counter({onAdded,value}:Props) {
  return (
    
    <div>
        <Button variant='contained'
        onClick={onAdded}
        >Add {value}</Button>
        <br/>
    </div>
        
  )
}