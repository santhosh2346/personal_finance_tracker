# Personal Finance Tracker (Full Project Scaffold)

A ready-to-run full-stack Personal Finance Tracker with **Spring Boot**, **React + Vite + Tailwind CSS**, and **PostgreSQL**, containerized via **Docker**. Track income, expenses, categories, and visualize spending.

---

## Project Structure

- **backend/** — Spring Boot (Java 17) REST API
- **frontend/** — React (Vite) + Tailwind CSS UI
- **docker-compose.yml** — Postgres, backend, frontend services

---

## Quickstart (Local Development)

### Backend
1. Ensure **Java 17** and **Maven** are installed.
2. Configure database if needed (defaults in `application.yml`).
3. From `backend/`:
```bash
./mvnw spring-boot:run
# or
mvn spring-boot:run
