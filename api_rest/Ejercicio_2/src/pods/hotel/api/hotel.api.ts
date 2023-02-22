import { Hotel } from './hotel.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './hotel.mock-data';
import axios from 'axios';
const url = '/api/hotels';
export const getHotel = async (id: string): Promise<Hotel> => {
  const response = await fetch(`${url}/${id}`);
  if(response.ok){
    return await response.json();
  }else{
    throw new Error('Hotel not found');
  }
};


export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
await fetch(hotel.id ? `${url}/${hotel.id}` : url, {
  method: hotel.id ? 'PUT' : 'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(hotel),
})

  return true;
};
