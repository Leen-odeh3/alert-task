import { ReactNode } from "react";

interface IProps {
  icon:ReactNode;
  title: string;
  description: string;
}

import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";

export const mydata:IProps[] =[
  {
    icon:<AlertTriangle/> ,
    title:"alert-warning",
    description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur ratione tenetur inventore laudantium vero obcaecati id, praesentium cum nesciunt quo ex, labore earum in magnam odio perferendis magni suscipit"
  },
  {
    icon:<Ban/> ,
    title:"alert-error",
    description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur ratione tenetur inventore laudantium vero obcaecati id, praesentium cum nesciunt quo ex, labore earum in magnam odio perferendis magni suscipit"
  },
  {
    icon:<Bell/>,
    title:"alert-default",
    description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur ratione tenetur inventore laudantium vero obcaecati id, praesentium cum nesciunt quo ex, labore earum in magnam odio perferendis magni suscipit"
  }
  ,  {
    icon:<CheckCheck/> ,
    title:"alert-success",
    description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur ratione tenetur inventore laudantium vero obcaecati id, praesentium cum nesciunt quo ex, labore earum in magnam odio perferendis magni suscipit"
  },  {
    icon:<Info/> ,
    title:"alert-info",
    description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consectetur ratione tenetur inventore laudantium vero obcaecati id, praesentium cum nesciunt quo ex, labore earum in magnam odio perferendis magni suscipit"
  }
]