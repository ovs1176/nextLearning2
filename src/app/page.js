import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello from home page...</h1>
      <Link href="/productList"> Go to product page (client side)</Link>
      <Link href="/productListSSC"> Go to product page (server side)</Link>
    </div>
  )
}
