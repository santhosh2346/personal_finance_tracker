import React, {useEffect, useState} from 'react';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { fetchTransactions, createTransaction, deleteTransaction } from './api';

export default function App(){
  const [transactions, setTransactions] = useState([]);

  async function load(){
    const res = await fetchTransactions();
    setTransactions(res);
  }

  useEffect(()=>{ load(); }, []);

  async function handleAdd(tx){
    const saved = await createTransaction(tx);
    setTransactions(prev => [saved, ...prev]);
  }

  async function handleDelete(id){
    await deleteTransaction(id);
    setTransactions(prev => prev.filter(t => t.id !== id));
  }

  const balance = transactions.reduce((s,t) => s + (t.amount||0), 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Personal Finance Tracker</h1>
      <div className="mb-4 p-4 bg-white rounded shadow flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-500">Current Balance</div>
          <div className="text-xl font-semibold">${balance.toFixed(2)}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <AddTransaction onAdd={handleAdd} />
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-medium mb-3">Recent</h2>
          <TransactionList transactions={transactions} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
