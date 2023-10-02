package com.aula.demo.model.repository;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Disciplina {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    private String nome;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @ManyToMany
    @JoinTable(name = "alunoDisciplina", joinColumns = @JoinColumn(name = "disciplinaId"),
    inverseJoinColumns = @JoinColumn(name = "alunoId"))
    private Set<Aluno> alunosDisciplinas = new HashSet<>();

    public Set<Aluno> getAlunosDisciplinas() {
        return alunosDisciplinas;
    }

    public void setAlunosDisciplinas(Set<Aluno> alunosDisciplinas) {
        this.alunosDisciplinas = alunosDisciplinas;
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "professorId", referencedColumnName = "id")
    private Professor professor;

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

}