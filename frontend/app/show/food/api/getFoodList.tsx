import type { NextApiRequest , NextApiResponse } from "next";
import axiosInstance from "@/app/components/axiosInstance";

export default async function getFoodList(req: NextApiRequest , res: NextApiResponse)	{
	try {
		const response = await axiosInstance.get("/api/food");  // แทนที่ด้วย endpoint ที่คุณต้องการเรียก
		const foodList = response.data;
		res.status(200).json(foodList);
	} catch (err) {
		res.status(500).send({ error: "ล้มเหลวในการดึงข้อมูล" });
	}
}