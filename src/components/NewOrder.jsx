import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import axios from "axios"
export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  
  
  
  const user=useSelector(store=>store.user)
  const [Data,setData]=useState([])
  const [all,setAll]=useState(true)
  useEffect(()=>{
    getData()
  },[])
  
  
  const getData=()=>{
    axios.get(`http://localhost:8080/orders?owner_name=${user.username}`).then(({data})=> setData(data))
    
  }
  const [pblm,setPblm]=useState({owner_name:user.username,
  status:"Not Accepted"})

  const handleChange=(e)=>{
    const {value,name}=e.target;
    setPblm({...pblm,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/orders",pblm).then(()=>getData())
  }
  return (
    <div className="App">
      <div className="form">
       <form action="" onSubmit={e=>handleSubmit(e)}>
       <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
          onChange={handleChange}
        />
        {/* This input is readonly, it's coming from redux */}
        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
          value={user.username}
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
          onChange={handleChange}

        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit" type="submit">submit</button>
       </form>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter" onClick={()=>{
         all?setData(Data.filter(e=>e.status!=="Done")):getData()
          setAll(!all);
        }}>
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */
           all?"Show only finished":"Show all"
          }
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        {
          Data.map(e=><div className="past-orders" key={e.id}>
          <span className="id">{e.id}</span>. <span className="problem">{e.problem}</span>{" "}
          <span className="cost">
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
            {e.status!=="Not Accepted"? "$"+e.cost:""}
          </span>
          <p className="status">Status:{e.status} </p>
          <hr />
        </div>)
        }
      </div>
    </div>
  );
};
