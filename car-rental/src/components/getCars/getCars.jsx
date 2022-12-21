import { collection, getDocs, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user.context'
import { db } from '../../utils/firebase/firebase.utils'
import PopularFeature from '../popularfeature/popularfeature';

function GetCars() {

    const { currentUser } = useContext(UserContext);
    const email = currentUser.email;
    const[vehicles, setVehicles] = useState([])
    const [numberOfCars, setNumberOfCars] = useState(0);

    const fetchPost = async () => {
        await getDocs(collection(db, "vehicles"))
        .then((QuerySnapshot)=>{
            
            const newData = QuerySnapshot.docs
            .map((doc) => ({...doc.data(0), id:doc.id}))
            console.log(newData)
            const newDataFiltered = newData.filter(f => f.userEmail === email)
            console.log("filtracja", newDataFiltered)
            setVehicles(newDataFiltered)
            setNumberOfCars(newDataFiltered.length);
            console.log("NUmer samochodow", numberOfCars)
        })
        
    }
    useEffect(() => {
          fetchPost();

      }, [numberOfCars]);
    
    console.log(vehicles)
  return (
    <div className='carsDisplayer-container'>
        <div className='carsDisplayer-title'>
        <h2>Your Cars: </h2></div>
        <div className='carsDisplyer-content'>
        {/* {
        vehicles?.map((vehicle, i) =>(
            <p key={i}>
            { vehicle.name }
            </p>
            ))} */}
            {vehicles?.map((data) => (
          <PopularFeature data={data} key={data.id}/>
        ))}
         </div>
    </div>
  )
}

export default GetCars