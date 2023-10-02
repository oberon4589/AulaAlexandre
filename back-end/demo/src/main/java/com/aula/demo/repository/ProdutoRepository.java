package com.aula.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aula.demo.model.Produto;

public interface ProdutoRepository extends 
    JpaRepository<Produto, Long> {
    
}
