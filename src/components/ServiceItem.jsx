import React from 'react';
import '../Custom-css/style.css'
function ServiceItem({ service, deleteService, setEditingService }) {
  return (
    <div className='flex justify-center items-center text-lg '>
      <li className='flex justify-center items-center flex-col border-b  my-4 border-neutral-700'>
      <h3 className='p-2 my-2 rounded-xl font-sans outer-shadow'> Service : {service.name}</h3>
      <p className='p-2 my-2 rounded-xl font-sans outer-shadow'> About Service : {service.description}</p>
      <p className='p-2 my-2 rounded-xl font-sans outer-shadow'>Price: ${service.price}</p>
      <button onClick={() => setEditingService(service)} className='my-2 w-1/2 btn-grad'>Edit</button>
      <button onClick={() => deleteService(service.id)} className='my-2 w-1/2 btn-grad'>Delete</button>
    </li>
    </div>
  );
}

export default ServiceItem;
