
const Table = ({ data }) => {
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
                <tr key={index}>
                  <th>{item.ProductID}</th>
                  <td>{item.Name}</td>
                  <td>{item.ProductNumber}</td>
                  <td>{item.Color}</td>
                  <td>{item.StandardCost}</td>
                  <td>{item.ListPrice}</td>
                  <td>{item.Size}</td>
                  <td>{item.Weight}</td>
                  <td>{item.ProductLine}</td>
                  <td>{item.ModifiedDate}</td>
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