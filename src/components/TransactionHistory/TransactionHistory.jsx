import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(items => (
                <tr  key={items.id} id={items.id}>
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