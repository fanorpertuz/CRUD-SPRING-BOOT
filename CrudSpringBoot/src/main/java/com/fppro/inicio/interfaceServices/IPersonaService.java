package com.fppro.inicio.interfaceServices;

import java.util.List;
import java.util.Optional;

import com.fppro.inicio.modelo.Persona;

public interface IPersonaService {

	public List<Persona>listar();
	public Optional<Persona>listarId(int id);
	public int save(Persona p);
	public void delete(int id);
}
