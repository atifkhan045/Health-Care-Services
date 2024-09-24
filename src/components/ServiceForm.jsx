import React, { useState, useEffect } from 'react';
import '../Custom-css/style.css'

function ServiceForm({ addService, updateService, editingService }) {
  const [serviceData, setServiceData] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    if (editingService) {
      setServiceData({
        name: editingService.name,
        description: editingService.description,
        price: editingService.price,
      });
    }
  }, [editingService]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData({
      ...serviceData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!serviceData.name || !serviceData.description || !serviceData.price) {
      alert('All fields are required!');
      return;
    }

    if (editingService) {
      updateService({ ...serviceData, id: editingService.id });
    } else {
      addService(serviceData);
    }
    setServiceData({ name: '', description: '', price: '' });
  };

  return (
    <div className='outer-shadow w-1/2 rounded-2xl  '>
      <h1 className='text-2xl text-center font-sans font-thin my-4'>Add Services</h1>
      <form onSubmit={handleSubmit} 
    className='max-h-96 flex justify-center items-center flex-col gap-4 my-12'>
      <input
        type="text"
        name="name"
        placeholder="Service Name"
        value={serviceData.name}
        onChange={handleInputChange}
        required
        className='p-4 bg-transparent rounded-xl outer-shadow'
      />
      
      <textarea
          rows={4}
          cols={22}
          name="description"
          placeholder="Description"
          value={serviceData.description}
          onChange={handleInputChange}
          required
        className='p-4 bg-transparent rounded-xl outer-shadow'

        />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={serviceData.price}
        onChange={handleInputChange}
        required
        className='p-4 bg-transparent outer-shadow rounded-xl'

      />
      <button type="submit" className='btn-grad outer-shadow w-1/3 p-2 font-sans font-semibold'>{editingService ? 'Update Service' : 'Add Service'}</button>
    </form>
    </div>
  );
}

export default ServiceForm;
