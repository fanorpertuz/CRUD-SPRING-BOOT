package com.fppro.inicio.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fppro.inicio.modelo.Persona;

@Repository
public interface IPersona extends CrudRepository<Persona, Integer>{

	
}
