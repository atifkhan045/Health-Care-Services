import React, { useState, useEffect } from 'react';
import ServiceList from './components/ServiceList';
import ServiceForm from './components/ServiceForm';
import TypedHeading from './components/TypedHeading';

function App() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  // Add new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  // Update service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null); // Clear the editing state
  };

  // Delete service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };


  // useEffect to load services from localStorage
  useEffect(()=>{
    const services = JSON.parse(localStorage.getItem("services"))

    if(services && services.length > 0){
      setServices(services)
    }
  },[])

  // useEffect to save services to localStorage
  useEffect(()=>{
    localStorage.setItem("services", JSON.stringify(services))
  },[services])

  return (
    <div className="App mt-4 text-white ">
      <h1 className='text-2xl font-bold text-center'>Jarurat Health Care Services
        <TypedHeading/>
      </h1>
      <div className='flex justify-center items-center gap-12 mx-8'>
      <ServiceForm
        addService={addService}
        updateService={updateService}
        editingService={editingService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        setEditingService={setEditingService}
      />
      </div>
    </div>
  );
}

export default App;
