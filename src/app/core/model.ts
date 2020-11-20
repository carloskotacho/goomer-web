export class File {
  id: number;
}

export class Restaurant {
  id: number;
  name: string;
  address: string;
  week_opening_time: string;
  week_closing_time: string;
  weekend_opening_time: string;
  weekend_closing_time: string;
}

export class Product {
  id: number;
  name: string;
  price: string;
  category: string;
  promotion: boolean;
  description: string;
  promotional_price: string;
  day_week: string[];
  promotion_start_time: string;
  promotion_end_time: string;
  restaurant_id: number;
}
