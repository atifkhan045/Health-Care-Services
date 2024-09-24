import React from 'react';
import ServiceItem from './ServiceItem';

function ServiceList({ services, deleteService, setEditingService }) {
  return (
    <div className='w-1/2 outer-shadow rounded-2xl my-12'>
      <h1 className='text-2xl text-center font-sans font-thin my-4'>Services List</h1>

      {services.length === 0 ? (
        // Display the message if no services are in the list
        <p className="text-center text-white font-sans font-thin my-4 text-xl">
          The services will show here.
        </p>
      ) : (
        // Scrollable container for the service list
        <ul className="max-h-96 overflow-y-auto">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              deleteService={deleteService}
              setEditingService={setEditingService}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceList;
