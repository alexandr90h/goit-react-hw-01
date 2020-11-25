export default function TransactionHistory({items}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(obj => {
                    return (
                        <tr key={obj.id}>
                            <td>{obj.type}</td>
                            <td>{obj.amount}</td>
                            <td>{obj.currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
