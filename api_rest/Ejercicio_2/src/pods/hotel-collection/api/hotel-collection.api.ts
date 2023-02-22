import { HotelEntityApi } from './hotel-collection.api-model';
import { mockHotelCollection } from './hotel-collection.mock-data';
import axios from 'axios';
let hotelCollection = [...mockHotelCollection];
const url = '/api/hotels';
export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  const response = await fetch(url);
  if(response.ok){
    return await response.json();
  }else{
    throw new Error(response.statusText)
  }

};

export const deleteHotel = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, {method: 'DELETE'});
  return response.ok;
};
