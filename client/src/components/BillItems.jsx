function BillItems({ item }) {
  return (
    <div className="flex items-center justify-between w-full font-poppins p-2 rounded-md">
      <p>{item.name}</p>
      <p>{item.price * item.qty} </p>
    </div>
  )
}

export default BillItems
