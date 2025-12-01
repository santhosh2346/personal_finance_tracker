const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

export async function fetchTransactions(){
  const res = await fetch(`${BASE}/transactions`);
  return res.json();
}

export async function createTransaction(tx){
  const res = await fetch(`${BASE}/transactions`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(tx)
  });
  return res.json();
}

export async function deleteTransaction(id){
  await fetch(`${BASE}/transactions/${id}`, { method: 'DELETE' });
}
