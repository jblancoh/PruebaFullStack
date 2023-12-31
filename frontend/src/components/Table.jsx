import { useRouter } from "next/navigation"

const Table = ({ data }) => {
  const router = useRouter()
  const onClickRow = (e) => {
    const firstChild = e.target.parentNode.firstChild
    const text = firstChild.textContent
    router.push(`/products/${text}`)
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ProductID</th>
            <th>Name</th>
            <th>ProductNumber</th>
            <th>Color</th>
            <th>StandardCost</th>
            <th>ListPrice</th>
            <th>Size</th>
            <th>Weight</th>
            <th>ProductLine</th>
            <th>ModifiedDate</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index} onClick={onClickRow} className="cursor-pointer">
                  <th>{item.productID}</th>
                  <td>{item.name}</td>
                  <td>{item.productNumber}</td>
                  <td>{item.color}</td>
                  <td>{item.standardCost}</td>
                  <td>{item.listPrice}</td>
                  <td>{item.size}</td>
                  <td>{item.weight}</td>
                  <td>{item.productLine}</td>
                  <td>{item.modifiedDate}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table