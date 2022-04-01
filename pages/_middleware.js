import {NextResponse} from "next/server"

const middleware =  (req, ev) => {
  const os = req.ua.os.name

  console.log('hello!!!!!!!!!!!!!!')
  return NextResponse.rewrite(`/${os}`)
};

export default middleware;
