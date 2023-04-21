// 静态路由 demo
/**
const usernames = ["张三", "李四", "王五"]

export const get= ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify({
      name: usernames[id]
    })
  }
};

export function getStaticPaths () {
    return [ 
        { params: { id: "0"} },
        { params: { id: "1"} },
        { params: { id: "2"} },
    ]
}

**/

//  ssr动态路由 demo

// import { getProduct } from '../db';

export async function get({ params }) {
  const id = params.id;
  // const product = await getProduct(id);

  // if (!product) {
  //   return new Response(null, {
  //     status: 404,
  //     statusText: 'Not found'
  //   });
  // }
  const product = {
    name: "张三",
    age: 18,
  };

  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
