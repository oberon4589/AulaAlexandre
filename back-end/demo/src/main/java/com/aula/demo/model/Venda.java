package com.aula.demo.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "venda")
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    private String produto_id;
    public String getProduto_id() {
        return produto_id;
    }
    public void setProduto_id(String produto_id) {
        this.produto_id = produto_id;
    }
    private Integer quant_vendida;
    public Integer getQuant_vendida() {
        return quant_vendida;
    }
    public void setQuant_vendida(Integer quant_vendida) {
        this.quant_vendida = quant_vendida;
    }
    private Date data_venda;
    public Date getData_venda() {
        return data_venda;
    }
    public void setData_venda(Date data_venda) {
        this.data_venda = data_venda;
    }
    private Float total_venda;
    public Float getTotal_venda() {
        return total_venda;
    }
    public void setTotal_venda(Float total_venda) {
        this.total_venda = total_venda;
    }
    
}
