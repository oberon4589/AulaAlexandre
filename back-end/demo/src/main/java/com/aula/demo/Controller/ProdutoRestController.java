package com.aula.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aula.demo.model.Produto;
import com.aula.demo.repository.ProdutoRepository;

@RestController
@RequestMapping(value="/api")
public class ProdutoRestController {
    @Autowired
    ProdutoRepository pr;

    @GetMapping("/produtos")
    public List<Produto> listaProdutos() {
        return pr.findAll(); // retorna todos os produtos cadastrados
    }

    @GetMapping("/produto/{id}")
    public Optional<Produto> listaProdutoUnico(@PathVariable(value="id") long id) {
        return pr.findById(id); // retorna um produto cadastrado pelo id
    }

    @PostMapping("/produto")
    public Produto salvaProduto(@RequestBody Produto produto) {
        return pr.save(produto); // salva um produto no banco de dados
    }

    @DeleteMapping("/produto")
    public void deletaProduto(@RequestBody Produto produto) {
        pr.delete(produto); // deleta um produto do banco de dados
    }
    
}
    