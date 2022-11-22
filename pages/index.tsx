import "joliss-import-test"

let x = eval("1")
let y = eval("1")
console.log("NULLISH: pages/index.tsx", x ?? y)

export default function Home() {
  return (
    <div>
    </div>
  )
}
