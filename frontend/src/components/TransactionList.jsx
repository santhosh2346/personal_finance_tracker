import React from 'react';

export default function TransactionList({ transactions, onDelete }) {
  if (!transactions) return null;
  return (
    <div className="space-y-2">
      {transactions.map(tx => (
        <div key={tx.id} className="flex items-center justify-between p-3 bg-white rounded shadow">
          <div>
            <div className="font-medium">{tx.description}</div>
            <div className="text-sm text-gray-500">{tx.category} • {tx.date ? new Date(tx.date).toLocaleDateString() : ''}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className={`font-semibold ${tx.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {tx.amount < 0 ? `-$${Math.abs(tx.amount).toFixed(2)}` : `$${tx.amount.toFixed(2)}`}
            </div>
            <button onClick={() => onDelete(tx.id)} className="text-sm text-red-500 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
