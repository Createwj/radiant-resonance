import { info } from '../api/index.js'
export const get = async ({ params, request }) => {
  const infos = await info();
  return {
    body: JSON.stringify(infos)
  }
};

export const post = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "这是一个 POST 请求！"
    })
  }
}

export const del = ({ request }) => {
  return {
    body: JSON.stringify({
      message: "这是一个 DELETE 请求！"
    })
  }
}

export const all = ({ request }) => {
  return {
    body: JSON.stringify({
      message: `这是一个 ${request.method} 请求！`
    })
  }
}