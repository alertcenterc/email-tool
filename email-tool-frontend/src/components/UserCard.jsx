export const UserCard = ({id, fullname, username, email, phone, balance, createdAt, role, tradehistory}) => {
return(
    <div>
    <section className="grid grid-cols-[3fr_2fr_1fr_1fr_1fr] gap-2 m-2 p-2 border bg-gray-900">
        <div className=" text-gray-200 p-2  border text-center">Name: {fullname}</div>
        <div className=" text-gray-200 p-2 border text-center">Email: {email}</div>
        <div className=" text-gray-200 p-2  border text-center">Balance: {balance}</div>
        <div className=" text-gray-200 p-2  border text-center">Phone: {phone}</div>
        <div className=" text-gray-200 p-2  border text-center">Date Created: {createdAt}</div>
    </section>
    </div>
)
}