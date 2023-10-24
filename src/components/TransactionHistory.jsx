export const TransactionHistory = ({ items }) => {
    // const { type, amount, currency, id } = items;
    return (
        <table className="transactionHistory">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(items => (
                <tr key={items.id}>
                    <td>{items.type}</td>
                    <td>{items.amount}</td>
                    <td>{items.currency}</td>
                </tr>
            ))                   
            }                             
        </tbody>
        </table>        
    )
}