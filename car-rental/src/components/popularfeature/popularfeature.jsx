import React from 'react'
import './popularfeature.css'
import car from '../../assets/rsz_merol.png'
function PopularFeature(props) {
    const data123 = props;
    //console.log(data123)
  return (
    <div className='cr__features-pFcontainer'>
        <div className='cr__features-pFimage'>
            <img src={car} alt='car'/>
        </div>
        <div className='cr__features-pFname'>
            <p>{data123.data.carName}</p>
        </div>
        <div className='cr__features-pFspecify'>
        <table>
            <tbody>
            <tr>
                <td><i className="fa-solid fa-user-group"></i>{data123.data.peopleNumber} </td>
                <td><i className="fa-solid fa-gear"></i>{data123.data.gearbox} </td>
            </tr>
            
            <tr>
                <td><i className="fa-solid fa-gauge"></i>{data123.data.mileage}</td>
                <td><i className="fa-solid fa-gas-pump"></i>{data123.data.fuel}</td>
            </tr>
            </tbody>
        </table>
        </div>
        <div className='cr__features-pFprice'><span className='cr__features-pFprice-day'>${data123.data.costPerDay}</span>/PerDay</div>
    </div>
  )
}

export default PopularFeature