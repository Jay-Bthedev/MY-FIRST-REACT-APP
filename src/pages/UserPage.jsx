import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
    const params = useParams();
    // alert(params.userId);

    useEffect(() => {
           console.log(params)
    },[])
 
  return (
      <div>
          {params.userId}
    </div>
  )
}

export default UserPage