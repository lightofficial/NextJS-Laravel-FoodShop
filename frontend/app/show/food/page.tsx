'use client'
import { useState , useEffect } from 'react'
import Layouts from '../../components/Layout'
import getFoodList from './api/getFoodList'
import axiosInstance from '@/app/components/axiosInstance';

interface FoodItem {
	id : number;
	category : string;
	name : string;
}
function page() {
	const [foodItem , setFoodItem] = useState<FoodItem[]>([]);

	useEffect(() => {
		const getFoodList = async () => {
			try {
				const res = await axiosInstance.get('/api/food');
				setFoodItem(res.data);
			} catch (err) { 
				console.log(err)
			}
		};

		getFoodList();
	} , []);

  return (
	<Layouts>

		<div className='mt-10 mx-auto w-3/4'>
		<button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">เพิ่มรายการอาหาร</button>

		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ไอดี
                </th>
                <th scope="col" className="px-6 py-3">
                    หมวดหมู่อาหาร
                </th>
                <th scope="col" className="px-6 py-3">
                    ชื่ออาหาร
                </th>
              
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>

           {foodItem?.map((food) => (
                <tr key={food.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {food.id}
                  </th>
                  <td className="px-6 py-4">
                    {food.category}
                  </td>
                  <td className="px-6 py-4">
                    {food.name}
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
           
        </tbody>
    </table>
</div>
		</div>


	</Layouts>
  )
}

export default page