package com.app.controller;

import com.app.model.Transaction;
import com.app.service.TransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "${cors.origin:http://localhost:5173}")
public class TransactionController {
    private final TransactionService svc;
    public TransactionController(TransactionService svc) { this.svc = svc; }

    @GetMapping
    public List<Transaction> getAll() { return svc.listAll(); }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getById(@PathVariable Long id) {
        return svc.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Transaction create(@RequestBody Transaction tx) { return svc.save(tx); }

    @PutMapping("/{id}")
    public ResponseEntity<Transaction> update(@PathVariable Long id, @RequestBody Transaction tx) {
        return svc.findById(id).map(existing -> {
            existing.setDescription(tx.getDescription());
            existing.setAmount(tx.getAmount());
            existing.setCategory(tx.getCategory());
            existing.setDate(tx.getDate());
            svc.save(existing);
            return ResponseEntity.ok(existing);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        svc.delete(id);
        return ResponseEntity.noContent().build();
    }
}
