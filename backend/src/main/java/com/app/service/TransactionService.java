package com.app.service;

import com.app.model.Transaction;
import com.app.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {
    private final TransactionRepository repo;
    public TransactionService(TransactionRepository repo) { this.repo = repo; }

    public Transaction save(Transaction tx) { return repo.save(tx); }
    public List<Transaction> listAll() { return repo.findAll(); }
    public Optional<Transaction> findById(Long id) { return repo.findById(id); }
    public void delete(Long id) { repo.deleteById(id); }
}
