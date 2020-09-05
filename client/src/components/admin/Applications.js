import React, {useEffect} from 'react';

export default function Applications(){

  const [applications, setApplications] = useState({
    data
  });
  const [loading, setLoading] = useState(true);

useEffect(()=>{
  axios.get('/api/license').then(({data})=> {
    setApplications(data);
    setLoading(false)
    )
})

if(loading){
  return <Spinner />
}

  return (
    <ApplicationsContainer>
    <ApplicationList>
    {applications.map(application=> (
      <ApplicationListItem>{application._id}</ApplicationListItem>
    ))}
    </ApplicationList>

    </ApplicationsContainer>
  )

}