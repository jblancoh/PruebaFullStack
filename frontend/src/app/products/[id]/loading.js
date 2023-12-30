
const Loading = () => {
  return (
    <div className="border rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold p-5">Detalles de producto</h2>
      <div className="grid grid-cols-3 p-10">
        <div className="col-span-1">
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
        <div className="col-span-1">
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
        <div className="col-span-1">
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-20 mb-1"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;