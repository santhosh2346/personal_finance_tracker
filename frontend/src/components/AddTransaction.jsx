import React, { useState } from 'react';

export default function AddTransaction({ onAdd }) {
  const [form, setForm] = useState({ description: '', amount: 0, category: '', date: '' });

  function handleSubmit(e){
    e.preventDefault();
    const payload = { ...form, amount: Number(form.amount), date: form.date || new Date().toISOString().slice(0,10) };
    onAdd(payload);
    setForm({ description: '', amount: 0, category: '', date: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow space-y-3">
      <div>
        <label className="text-sm">Description</label>
        <input required value={form.description} onChange={e => setForm({...form, description: e.target.value})}
          className="w-full mt-1 p-2 border rounded" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <input type="number" step="0.01" value={form.amount} onChange={e=>setForm({...form, amount: e.target.value})}
          className="p-2 border rounded" placeholder="Amount (positive = income)" />
        <input value={form.category} onChange={e=>setForm({...form, category: e.target.value})}
          className="p-2 border rounded" placeholder="Category" />
        <input type="date" value={form.date} onChange={e=>setForm({...form, date: e.target.value})}
          className="p-2 border rounded" />
      </div>
      <div className="text-right">
        <button type="submit" className="px-4 py-2 rounded bg-sky-600 text-white">Add</button>
      </div>
    </form>
  );
}
